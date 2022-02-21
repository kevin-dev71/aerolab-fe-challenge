import React from "react"

export function getDisplayedValue(value: any, children: React.ReactNode) {
  const childArray = React.Children.toArray(children)
  const selectedChild: any = childArray.find((child: any) => child.props.value === value)

  return selectedChild.props.children
}
