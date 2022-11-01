import { generateSlug } from "@inventhora/utils"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import {
  BaseTextFieldProps,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material"
import { FC, useState } from "react"
import { useLocale } from "../../AppWrapper"
import { InputProps } from "../../lib/types"
import { useField } from "./Form"

const PasswordInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  error,
  variant = "outlined",
  ...rest
}) => {
  const { locales } = useLocale()

  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name
  const [showPassword, setShowPassword] = useState(false)

  const { field, fieldState } = useField(formName)

  return (
    <TextField
      margin="dense"
      size="small"
      id={generateSlug(formName)}
      {...rest}
      {...field}
      style={{ width: "100%" }}
      type={showPassword ? "text" : "password"}
      variant={variant as any}
      helperText={fieldState.error ?? helperText}
      error={Boolean(fieldState.error) || error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip
              title={showPassword ? locales.hidePassword : locales.showPassword}
            >
              <IconButton
                tabIndex={-1}
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                size="large"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {}
