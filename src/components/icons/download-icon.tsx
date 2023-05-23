import React from "react";
import { iIconTypes } from "../../utills/types/icon-types";

export const DownloadIcon: React.FC<iIconTypes> = ({
  color,
  height,
  width,
  fill,
}) => {
  return (
    <>
      <svg
        width={width ?? "32"}
        height={height ?? "32"}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16.2931" cy="16.328" r="15.3312" fill="white" />
        <mask
          id="mask0_188_2608"
          maskUnits="userSpaceOnUse"
          x="9"
          y="14"
          width="15"
          height="10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.10645 14.0241H23.4791V23.9012H9.10645V14.0241Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_188_2608)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.2922 23.9012H12.2937C10.5366 23.9012 9.10645 22.4718 9.10645 20.714V17.2106C9.10645 15.4535 10.5366 14.0241 12.2937 14.0241H12.9642C13.2617 14.0241 13.5031 14.2656 13.5031 14.5631C13.5031 14.8606 13.2617 15.1021 12.9642 15.1021H12.2937C11.1302 15.1021 10.1844 16.0478 10.1844 17.2106V20.714C10.1844 21.8775 11.1302 22.8233 12.2937 22.8233H20.2922C21.455 22.8233 22.4015 21.8775 22.4015 20.714V17.2041C22.4015 16.045 21.4586 15.1021 20.3001 15.1021H19.6224C19.3249 15.1021 19.0835 14.8606 19.0835 14.5631C19.0835 14.2656 19.3249 14.0241 19.6224 14.0241H20.3001C22.0529 14.0241 23.4794 15.4506 23.4794 17.2041V20.714C23.4794 22.4718 22.0493 23.9012 20.2922 23.9012Z"
            fill={fill ?? "#737373"}
          />
        </g>
        <mask
          id="mask1_188_2608"
          maskUnits="userSpaceOnUse"
          x="15"
          y="9"
          width="2"
          height="10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.7539 9.14166H16.8319V18.8728H15.7539V9.14166Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_188_2608)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2929 18.8728C15.9954 18.8728 15.7539 18.6313 15.7539 18.3338V9.68053C15.7539 9.38301 15.9954 9.14154 16.2929 9.14154C16.5904 9.14154 16.8319 9.38301 16.8319 9.68053V18.3338C16.8319 18.6313 16.5904 18.8728 16.2929 18.8728Z"
            fill={fill ?? "#737373"}
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.198 12.3242C14.0607 12.3242 13.9227 12.2717 13.8178 12.1668C13.6073 11.957 13.6058 11.6163 13.8164 11.4051L15.9112 9.30085C16.1132 9.09747 16.4725 9.09747 16.6745 9.30085L18.77 11.4051C18.9799 11.6163 18.9792 11.957 18.7686 12.1668C18.5573 12.3767 18.2167 12.3767 18.0068 12.1654L16.2929 10.4449L14.5796 12.1654C14.4747 12.2717 14.336 12.3242 14.198 12.3242Z"
          fill={fill ?? "#737373"}
        />
      </svg>
    </>
  );
};
