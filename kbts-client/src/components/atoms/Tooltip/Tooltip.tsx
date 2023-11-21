import React, { useEffect, useRef, useState } from "react";

import { Portal } from "@Atoms/Portal";
import { Content, TooltipColorType, TooltipContainer, TooltipDirectionType, TooltipSizeType } from "./Tooltip.styled";

interface TooltipProp {
  content?: string | string[] | React.ReactNode;
  size?: TooltipSizeType;
  direction?: TooltipDirectionType;
  color?: TooltipColorType;
  children?: React.ReactNode;
  className?: string;
}

export function Tooltip({
  content,
  size = "small",
  direction = "bottom-center",
  color = "black1",
  children,
  className,
}: TooltipProp) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [anchorElementRect, setAnchorElementRect] = useState<DOMRect>();

  useEffect(() => {
    setAnchorElementRect(ref.current?.getBoundingClientRect());
  }, [ref, show]);

  return (
    <TooltipContainer
      className={className}
      ref={ref}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(false)}
    >
      {children}
      {show && (
        <Portal anchorElementRect={anchorElementRect} hidePointerEvents>
          <Content className={`tooltip ${className}`} size={size} color={color} direction={direction}>
            {Array.isArray(content)
              ? content.map((line) => (
                  <React.Fragment key={line}>
                    {line} <br />
                  </React.Fragment>
                ))
              : content}
          </Content>
        </Portal>
      )}
    </TooltipContainer>
  );
}
