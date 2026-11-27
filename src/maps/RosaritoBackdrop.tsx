import { memo, useId } from "react";

const shore =
  "M190 -300 C206 -96 230 -51 256 -19 S282 22 293 48 Q301 63 298 79 L315 92 Q328 96 325 110 Q321 121 341 130 L349 149 Q373 165 372 185 Q374 206 395 215 L408 242 Q406 257 424 274 L430 296 Q444 312 445 329 Q457 343 455 362 Q470 381 473 394 L490 404 Q493 423 517 436 L520 454 Q540 486 546 514 Q569 528 570 548 Q593 556 600 578 L618 591 Q619 613 639 625 L651 652 Q672 673 675 702 Q701 748 720 781 L830 1040";

const land = shore + " H4000 V-300 Z";

const dunePatches = [
  "M585 -65Q702 20 696 89T736 226Q674 262 630 230T588 129Q543 97 557 56Z",
  "M790 -80H1540V246Q1314 191 1209 263T1057 291Q1000 238 905 273T833 225Q857 174 800 147T772 59Z",
  "M1030 260Q1088 242 1160 274T1310 293L1450 410V870H953Q875 724 919 668T924 521Q836 485 852 430T927 330Z",
  "M701 381Q766 343 817 399T834 465Q806 517 751 517T697 454Z",
  "M736 550Q811 504 859 553T872 661L920 793H738L696 694Q731 638 718 596Z",
  "M465 91Q503 57 544 83T543 151Q517 164 461 139Z",
];

const primaryRoads = [
  "M279 -98 Q365 29 381 109 T433 204 Q463 243 469 296 T505 377 Q540 408 548 448 T595 530 Q620 569 637 612 T716 739",
  "M499 -52 C535 79 541 110 605 176 S681 248 693 314 S742 409 807 452 C872 492 890 529 934 557 S1020 600 1175 607",
];

const secondaryRoads = [
  "M314 60 C392 85 441 51 536 64 S697 108 773 39",
  "M353 131 Q433 137 470 116 T570 108 Q640 144 668 206",
  "M393 223 Q490 214 543 230 T671 232 Q741 209 832 230",
  "M439 306 Q510 280 583 294 T715 328 L857 304",
  "M489 411 Q562 387 635 396 T743 410 Q839 357 952 387",
  "M552 505 Q639 460 712 495 T877 512",
  "M620 595 Q691 551 793 580 T978 591",
  "M670 650 Q738 621 817 661 T1015 681",
  "M746 -68 Q723 10 755 99 T784 229 Q834 275 819 350",
  "M934 -26 Q869 71 930 141 T930 251 Q890 274 952 387",
  "M1041 -11 Q1048 82 1099 122 T1086 251",
  "M983 434 Q1052 494 1126 453 T1280 423",
];

const districts = [
  [363, 77, -25, 7, 8],
  [432, 69, -10, 8, 6],
  [434, 160, -29, 8, 9],
  [508, 162, 12, 9, 7],
  [512, 247, -19, 8, 9],
  [580, 245, 14, 9, 7],
  [514, 346, -22, 8, 8],
  [596, 333, -4, 9, 8],
  [645, 350, 22, 8, 7],
  [585, 439, -26, 9, 8],
  [655, 443, 14, 9, 8],
  [640, 531, -27, 8, 7],
  [701, 537, 20, 8, 7],
  [691, 624, -24, 8, 6],
  [800, 274, 12, 7, 5],
] as const;

const contours = Array.from({ length: 18 }, (_, i) => {
  const inset = i * 17;
  return {
    north:
      "M" +
      (790 + inset) +
      " -95 Q" +
      (894 + inset) +
      " 8 " +
      (841 + inset) +
      " 93 T" +
      (953 + inset) +
      " 250",
    south:
      "M" +
      (940 + inset) +
      " 319 Q" +
      (1095 + inset) +
      " 458 " +
      (970 + inset) +
      " 544 T" +
      (1055 + inset) +
      " 786",
  };
});

export const RosaritoBackdrop = memo(function RosaritoBackdrop({
  city,
}: {
  city?: string;
}) {
  const id = useId();
  return (
    <>
      <defs>
        <linearGradient id={id + "-ocean"} x2="100%" y2="65%">
          <stop stopColor="#78aeb9" />
          <stop offset="1" stopColor="#accfd1" />
        </linearGradient>
        <clipPath id={id + "-land"}>
          <path d={land} />
        </clipPath>
        <pattern
          id={id + "-texture"}
          width="23"
          height="19"
          patternUnits="userSpaceOnUse"
        >
          <path d="M2 5h1m12 8h1m-9 4h1" stroke="#423927" strokeOpacity=".11" />
        </pattern>
      </defs>
      <rect
        x="-1600"
        y="-800"
        width="4400"
        height="2400"
        fill={"url(#" + id + "-ocean)"}
      />
      <path
        d={shore}
        fill="none"
        stroke="#e1eeee"
        strokeOpacity=".45"
        strokeWidth="22"
      />
      <path d={land} fill="#eaddc6" stroke="#fff7e6" strokeWidth="4" />
      <g clipPath={"url(#" + id + "-land)"}>
        {dunePatches.map((d, i) => (
          <path key={d} d={d} fill={i % 2 ? "#b4c49a" : "#c8cfa7"} />
        ))}
        <path
          d="M278 -20 Q461 25 506 140T609 308Q637 393 592 444L671 567 718 720H510Z"
          fill="#eedfc8"
          opacity=".58"
        />
        <g fill="none" stroke="#8e9e73" strokeWidth="1.2" opacity=".5">
          {contours.map(({ north, south }) => (
            <path key={north} d={north + south} />
          ))}
        </g>
        <g fill="none" stroke="#fcf5e7" strokeWidth="2.1">
          {districts.map(([x, y, angle, w, h]) => (
            <g
              key={x + "," + y}
              transform={"translate(" + x + " " + y + ") rotate(" + angle + ")"}
            >
              {Array.from({ length: w + 1 }, (_, i) => (
                <path
                  key={"a" + i}
                  d={
                    "M" +
                    i * 11 +
                    " 0 q" +
                    ((i % 3) - 1) * 6 +
                    " " +
                    h * 5 +
                    " " +
                    ((i % 3) - 1) * 5 +
                    " " +
                    h * 10
                  }
                />
              ))}
              {Array.from({ length: h + 1 }, (_, i) => (
                <path
                  key={"b" + i}
                  d={
                    "M0 " +
                    i * 10 +
                    " q" +
                    w * 5 +
                    " " +
                    ((i % 3) - 1) * 8 +
                    " " +
                    w * 11 +
                    " " +
                    ((i % 3) - 1) * 5
                  }
                />
              ))}
            </g>
          ))}
        </g>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {secondaryRoads.map((d) => (
            <path key={d} d={d} stroke="#fff5e0" strokeWidth="5" />
          ))}
          {primaryRoads.map((d) => (
            <path key={d} d={d} stroke="#fcf1d5" strokeWidth="10" />
          ))}
          {primaryRoads.map((d) => (
            <path key={d} d={d} stroke="#c98742" strokeWidth="3.6" />
          ))}
        </g>
        <rect
          x="150"
          y="-200"
          width="1450"
          height="1200"
          fill={"url(#" + id + "-texture)"}
        />
      </g>
      <g fill="none" stroke="#e0f1ef" strokeWidth="1.5" opacity=".45">
        <path d="M-180 72Q-6 41 155 79 M-92 223Q69 203 231 234 M-110 343Q114 313 271 352 M-45 524Q144 495 341 530 M10 607Q223 581 370 616" />
      </g>
      <text
        x="330"
        y="376"
        fill="#23556a"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="19"
        letterSpacing="5"
      >
        PACIFIC
        <tspan x="330" dy="26">
          OCEAN
        </tspan>
      </text>
      {city && (
        <text
          x="596"
          y="325"
          textAnchor="middle"
          fill="#453924"
          fontFamily="Georgia, serif"
          fontSize="25"
          fontStyle="italic"
          stroke="#eee2cd"
          strokeWidth="4"
          paintOrder="stroke"
        >
          {city}
        </text>
      )}
    </>
  );
});
