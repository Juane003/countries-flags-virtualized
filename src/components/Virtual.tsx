import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { Country } from "../types";
import { FlagCardPreview } from "./FlagCardPreview";
import { useWindowWidth } from "../hooks/useWindowWidth";
interface VirtualProps {
  data: Country[];
}

const ITEM_SIZE = 450;

export const Virtual = ({ data }: VirtualProps) => {
  const ITEMS_COUNT = data.length;
  const parentRef = useRef(null);
  const width = useWindowWidth();
  const itemsPerRow = Math.max(1, Math.floor(width / ITEM_SIZE));
  const count = Math.ceil(ITEMS_COUNT / itemsPerRow);
  const rowVirtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_SIZE,
  });
  return (
    <>
      <div ref={parentRef} className="overflow-auto h-[885px]	">
        <div className="relative flex flex-row gap-8">
          {rowVirtualizer.getVirtualItems().map((item) => {
            const index = item.index;
            const items = [];
            const fromIndex = index * itemsPerRow;
            const toIndex = Math.min(fromIndex + itemsPerRow, 250);
            for (let i = fromIndex; i < toIndex; i++) {
              items.push(
                <div
                  style={{
                    width: "320px",
                    height: "450px",
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FlagCardPreview country={data[i]} key={i} />
                </div>
              );
            }
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5rem",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "400px",
                  transform: `translateY(${item.start}px)`,
                }}
              >
                {items}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
