import { Menu, Transition } from "@headlessui/react";
import { Button, ButtonGroup } from "@mui/material";
import { Action } from "lib/types";
import Router from "next/router";
import { CSSProperties, FC, Fragment, useMemo } from "react";
import { useWindowSize } from "react-use";

const Actions: FC<Props> = ({ actions, mobile = "wrap", ...props }) => {
  const { width } = useWindowSize();
  const filteredActions = useMemo(
    () => actions.filter((a) => a.isShown || a.isShown === undefined),
    [actions]
  );

  if (width < 1000) {
    if (mobile === "wrap") {
      return (
        <>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-transparent bg-opacity-20 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2 h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                style={{ zIndex: 9999 }}
                className="outline-opacity-5 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg outline outline-primary-500 focus:outline-none"
              >
                <div className="px-1 py-1 ">
                  {actions.map((a) => (
                    <Menu.Item key={a.label}>
                      {({ active }) =>
                        a.onClick ? (
                          <button
                            type="button"
                            onClick={a.onClick}
                            className={`${
                              active
                                ? `!bg-primary-500 text-white`
                                : "bg-white text-gray-900"
                            }  group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <div className="mr-2 h-5 w-5" aria-hidden="true">
                              {a.icon && a.icon}
                            </div>
                            {a.label}
                          </button>
                        ) : a.href ? (
                          <button
                            type="button"
                            onClick={() => Router.push(a.href)}
                            className={`${
                              active
                                ? `!bg-primary-500 text-white`
                                : "bg-white text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <div className="mr-2 h-5 w-5" aria-hidden="true">
                              {a.icon && a.icon}
                            </div>
                            {a.label}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className={`${
                              active
                                ? `!bg-primary-500 text-white`
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <div className="mr-2 h-5 w-5" aria-hidden="true">
                              {a.icon && a.icon}
                            </div>
                            {a.label}
                          </button>
                        )
                      }
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      );
    }

    if (mobile === "tiles") {
      return (
        <div className="grid w-full grid-cols-2">
          {actions.map((action) => {
            const buttonClass = `${
              action.icon ? "px-4 py-2" : "px-3 py-5"
            } border flex flex-col justify-center items-center rounded-lg m-2 !bg-primary-500 text-white uppercase`;

            return action.onClick ? (
              <button
                className={buttonClass}
                type="button"
                key={action.label}
                onClick={action.onClick}
              >
                {action.icon && <span className="pb-1"> {action.icon}</span>}
                <span> {action.label}</span>
              </button>
            ) : action.href ? (
              <button
                className={buttonClass}
                type="button"
                key={action.label}
                onClick={() => Router.push(action.href)}
              >
                {action.icon && <span className="pb-1"> {action.icon}</span>}
                {action.label}
              </button>
            ) : (
              <button className={buttonClass} type="submit" key={action.label}>
                {action.icon && <span className="pb-1"> {action.icon}</span>}
                {action.label}
              </button>
            );
          })}
        </div>
      );
    }
  }

  const buttonStyle = {};

  return (
    <ButtonGroup {...props} variant="contained" color="primary">
      {filteredActions.map((action) =>
        action.onClick ? (
          <Button
            style={buttonStyle}
            type="button"
            key={action.label}
            onClick={action.onClick}
          >
            {action.icon && action.icon}
            {action.label}
          </Button>
        ) : action.href ? (
          <Button
            key={action.label}
            style={buttonStyle}
            type="button"
            onClick={() => Router.push(action.href)}
          >
            {action.icon && action.icon}
            {action.label}
          </Button>
        ) : (
          <Button key={action.label} style={buttonStyle} type="submit">
            {action.icon && action.icon}
            {action.label}
          </Button>
        )
      )}
    </ButtonGroup>
  );
};

export default Actions;

interface Props {
  actions: Action[];
  className?: string;

  style?: CSSProperties;
  mobile?: "wrap" | "tiles" | "off";
}
