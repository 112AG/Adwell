import React from "react";

function SizeChart() {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col px-4 sm:px-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Size Chart
        </h1>
        <div className="flex items-end flex-wrap gap-2 justify-evenly pb-8">
          <div className="w-[210px] border-2 rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center flex-col text-[18px] h-[297px] ">
            <p className="text-red-900 font-semibold">A4</p>
            <p>(210 × 297 mm)</p>
          </div>
          <div className="w-[177px] border-2 rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center flex-col text-[16px] h-[240px]">
            {" "}
            <p className="text-red-900 font-semibold">STD/EXE</p>
            <p>(177 × 240 mm)</p>
          </div>
          <div className="w-[147px] border-2 rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center flex-col text-[14px] h-[206px]">
            {" "}
            <p className="text-red-900 font-semibold">A5</p>
            <p>(147 × 206 mm)</p>
          </div>
          <div className="w-[103px] border-2 rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center flex-col text-[12px] h-[147px]">
            {" "}
            <p className="text-red-900 font-semibold">A6</p>
            <p>(103 × 147 mm)</p>
          </div>
          <div className="w-[72px] border-2 rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center flex-col text-[8px] h-[101px]">
            {" "}
            <p className="text-red-900 font-semibold">A7</p>
            <p>(72 × 101 mm)</p>
          </div>
        </div>
        <p className="text-center text-[24px] text-red-900">
          Size: Length x Height <br />
          A4: 210 x 297 mm <br />
          STD: 177 x 240 mm <br />
          A5: 147 x 206 mm <br />
          A6: 103 x 147 mm <br />
          A7: 72 x 101 mm
        </p>
        <br />
        <p className="sm:leading-9 text-[#565050] text-[18px] sm:text-[22px] md:pb-8 text-center">
          The Adwell Notebooks offers a variety of notebook sizes to fit your
          needs. Our sizes include A4,STD, A5, A6, and A7 size, so you can
          choose the perfect notebook for your project, whether it's for school,
          work, or personal use. A4 & STD size is perfect for larger projects
          that require ample space, while A5 size is great for taking notes on
          the go. A6 size is compact and perfect for quick notes and memos,
          while A7 size is a classic choice that fits easily into most bags or
          purses. Our size chart makes it easy to select the right notebook for
          your needs, so you can focus on the content without worrying about the
          format.
        </p>
      </div>
    </div>
  );
}

export default SizeChart;
