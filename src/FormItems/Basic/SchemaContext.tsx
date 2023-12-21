import { createContext, useContext, useMemo } from "react"
import { ZodFirstPartyTypeKind, ZodObject } from "zod"
import { getObjectKeyByString } from "../../lib/misc"

export const SchemaContext = createContext({} as ZodObject<any, any>)

export const useIsRequired = (name: string) => {
  const ctx = useContext(SchemaContext)

  const isRequired = useMemo(() => {
    const valueField = getObjectKeyByString(ctx?.shape, name)

    const type: ZodFirstPartyTypeKind = valueField?._def?.typeName

    const checks = valueField?._def?.checks

    if (type === "ZodString" && checks?.some((c) => c.kind === "min")) {
      return true
    }

    if (
      type === "ZodString" &&
      checks?.some((c) => c.kind === "email") &&
      !checks?.some((c) => c.kind === "optional")
    ) {
      return true
    }

    if (type === "ZodDate" && !checks?.some((c) => c.kind === "optional")) {
      return true
    }

    if (type === "ZodArray" && valueField?._def?.minLength?.value > 0) {
      return true
    }

    if (type === "ZodEnum") {
      return true
    }

    return false
  }, [ctx, name])

  return isRequired
}
