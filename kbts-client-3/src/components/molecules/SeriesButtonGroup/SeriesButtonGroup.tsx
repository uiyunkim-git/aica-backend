import { SeriesButtonGroupContainer } from "./SeriesButtonGroup.styled";

interface SeriesButtonGroupProp {
  children?: React.ReactNode;
  className?: string;
}

export function SeriesButtonGroup({ children, className }: SeriesButtonGroupProp) {
  return <SeriesButtonGroupContainer className={className}>{children}</SeriesButtonGroupContainer>;
}
