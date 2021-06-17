import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How Simple works</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start mb-12">
            {/* 0 - 100 Bulding */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                0-100% BUILDING
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* Web Development */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Web development
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* App Development */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                    className="stroke-current text-white"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Mobile App Development
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>

            {/* Operations and Monitoring */}
            <div className="relative flex flex-col items-center p-12 bg-gray-50 rounded border-gray-100 shadow-md mb-8">
              <div className="rounded-full h-14 w-14 flex items-center justify-center bg-blue-500 -mt-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="stroke-current text-white"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Operations and Monitoring
              </h4>
              <p className="text-gray-600 text-center">
                Turn your ideas into high-tech solutions with a user-centered
                approach. We help you plan and define, then build, launch and
                scale your digital product.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <div className="flex flex-col justify-center object-scale-down h-full w-full max-w-xl">
                <svg id="e7b3b0c3-1e4f-480c-906c-c03021e90d10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 991.13988 770.17774"><title>professor</title><path d="M394.01076,64.91113,236.15757,150.41336a40.156,40.156,0,1,1-70.5866,38.23373l-53.82344,29.15382L251.16683,475.1951,533.43006,322.30535Z" transform="translate(-104.43006 -64.91113)" fill="#f2f2f2"/><circle cx="94.60365" cy="105.66791" r="32.5874" fill="#66a9f7"/><path d="M790.38464,753.97532l170.67214-55.67116a40.156,40.156,0,1,1,76.31882-24.89429l58.19434-18.98228-90.777-278.29668L699.60765,475.6786Z" transform="translate(-104.43006 -64.91113)" fill="#f2f2f2"/><circle cx="896.77566" cy="620.24394" r="32.5874" fill="#66a9f7"/><rect x="115.5" y="152.67774" width="788" height="358" fill="#3f3d56"/><rect x="128.5" y="165.67774" width="762" height="325" fill="#fff"/><rect x="739" y="475.17774" width="74" height="25" fill="#3f3d56"/><rect x="681" y="494.17774" width="54" height="7" fill="#66a9f7"/><polyline points="190.5 288.678 481.5 288.678 526.616 310.657 598.5 345.678 645.5 257.678 778.5 257.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><polyline points="304.925 288.678 326.5 339.678 379.5 339.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><polyline points="385.807 288.678 459.5 248.678 511.5 248.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><circle cx="304.5" cy="288.67774" r="9" fill="#66a9f7"/><circle cx="388.5" cy="288.67774" r="9" fill="#66a9f7"/><polyline points="526.5 310.678 532.5 399.678 584.5 399.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><polyline points="626.65 292.971 569.5 248.678 623.5 248.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><polyline points="721.051 257.678 776.5 301.678 828.5 301.678" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><circle cx="526.5" cy="310.67774" r="9" fill="#66a9f7"/><circle cx="720.5" cy="257.67774" r="9" fill="#66a9f7"/><circle cx="626.5" cy="292.67774" r="9" fill="#66a9f7"/><line x1="327.5" y1="347.67774" x2="379.5" y2="347.67774" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M615.93006,322.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M727.93006,321.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M727.93006,329.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M932.93006,374.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M913.93006,382.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M688.93006,472.58887h0Z" transform="translate(-104.43006 -64.91113)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><circle cx="809.54207" cy="75.52974" r="14.75556" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="152" cy="742.17774" rx="152" ry="28" fill="#f2f2f2"/><polygon points="256.389 493.658 229.272 507.339 231.027 510.834 258.143 497.153 256.389 493.658" fill="#66a9f7"/><path d="M356.41026,533.12245l-1.21823,7.3094s1.82735,50.55672-11.57323,34.71968-4.26382-37.15614-4.26382-37.15614l3.65471-6.09117Z" transform="translate(-104.43006 -64.91113)" fill="#fbbebe"/><path d="M278.44328,299.22149s-2.43647,25.58291-3.65471,26.80115,18.27352,24.36468,18.27352,24.36468l17.05527-15.837s-1.21823-23.14645,2.43647-28.01939S278.44328,299.22149,278.44328,299.22149Z" transform="translate(-104.43006 -64.91113)" fill="#fbbebe"/><path d="M278.44328,299.22149s-2.43647,25.58291-3.65471,26.80115,18.27352,24.36468,18.27352,24.36468l17.05527-15.837s-1.21823-23.14645,2.43647-28.01939S278.44328,299.22149,278.44328,299.22149Z" transform="translate(-104.43006 -64.91113)" opacity="0.1"/><polygon points="128.939 700.894 128.939 722.822 120.411 724.041 108.229 720.386 111.883 697.239 128.939 700.894" fill="#3f3d56"/><path d="M222.4045,776.76929s-3.6547-9.74588-9.74587-8.52764-7.30941,8.52764-7.30941,8.52764-4.87293,18.27351-12.18234,24.36468-14.61881,21.92822,0,24.36468,26.80115-3.6547,26.80115-4.87293,3.65471-8.52764,9.74588-9.74588,10.96411-2.43646,10.96411-7.3094-3.65471-9.74587-3.65471-9.74587-1.21823-23.10808-3.6547-20.08168a24.23422,24.23422,0,0,0-3.6547,7.89933Z" transform="translate(-104.43006 -64.91113)" fill="#2f2e41"/><polygon points="181.323 689.93 176.45 708.203 188.632 710.64 194.723 704.549 195.941 688.712 181.323 689.93" fill="#3f3d56"/><path d="M284.53445,770.67812s4.87293-3.65471,7.3094-3.65471h3.6547s0-8.52764,6.09118-8.52764,4.87293,6.09117,4.87293,6.09117,13.40058,20.71,17.05528,24.36469,23.14645,14.61881,7.30941,19.49175-26.80116,4.87293-34.11056-3.65471c0,0-7.30941-3.6547-12.18234-3.6547s-10.96411-2.43647-10.96411-6.09117,3.6547-10.96411,3.6547-10.96411,2.43647-21.92821,3.6547-19.49175S284.53445,770.67812,284.53445,770.67812Z" transform="translate(-104.43006 -64.91113)" fill="#2f2e41"/><path d="M232.15038,474.64721v40.20173s-13.40058,77.967-13.40058,103.5499-20.71,147.40634-10.96411,149.84281,32.89233,6.09117,34.11056,2.43647,9.74587-119.387,10.96411-120.60519,26.80115-97.45873,26.80115-97.45873l4.87294,1.21823,2.43646,109.64108s-12.18234,98.677-6.09117,98.677,31.67409-1.21824,31.67409-8.52764,13.40058-142.5334,13.40058-142.5334,15.837-107.20461,9.74587-118.16872-6.09117-17.05528-6.09117-17.05528Z" transform="translate(-104.43006 -64.91113)" fill="#2f2e41"/><circle cx="194.11408" cy="228.8283" r="24.36468" fill="#fbbebe"/><path d="M293.06209,335.76851s-15.22793-12.79146-16.44617-17.66439c0,0-7.91852,7.91852-7.91852,9.13675s-34.11056,4.87294-42.63819,14.61881-15.83705,30.45586-15.83705,30.45586l20.71,38.98349s1.21824,21.92822,1.21824,24.36468-6.09117,41.42-3.65471,42.6382,26.80116,13.40058,47.51114,10.96411,41.42-6.09117,47.51113-6.09117,10.96411,2.43647,10.96411,0-3.6547-7.30941-3.6547-9.74588-1.21824-8.52764-1.21824-12.18234-2.43647-9.74587-2.43647-14.61881,26.80116-70.65758,26.80116-70.65758-1.21824-20.71-20.71-30.45586-21.92821-13.40057-21.92821-13.40057-.37979-7.30941-1.40813-7.30941-4.683,10.96411-14.42892,12.18235Z" transform="translate(-104.43006 -64.91113)" fill="#d0cde1"/><polygon points="122.847 432.883 131.375 446.283 153.303 441.41 137.466 423.137 122.847 432.883" fill="#fbbebe"/><path d="M346.66439,366.22437l7.30941,9.74587s14.61881,70.65758,12.18234,96.2405-4.87294,45.07466-4.87294,45.07466,4.87294,18.27352,1.21823,18.27352-25.58291,1.21823-25.58291-2.43647S339.355,506.3213,339.355,506.3213L333.26381,452.719l-13.40057-18.27351Z" transform="translate(-104.43006 -64.91113)" fill="#d0cde1"/><path d="M281.99544,281.91075c1.4935-.633,3.22007-.1195,4.81953-.38952,1.87824-.31708,3.55879-1.70862,5.45549-1.533a10.48375,10.48375,0,0,1,2.5973.84328,3.39062,3.39062,0,0,0,2.66075.09529,1.51214,1.51214,0,0,0,.57862-2.27113,7.52045,7.52045,0,0,0,4.32739-1.86276,3.22984,3.22984,0,0,1,.82584-.61957,2.69555,2.69555,0,0,1,2.12237.33059l2.78767,1.285a3.52582,3.52582,0,0,1,1.593,1.13954c.33158.517.39648,1.21219.86613,1.60806.59923.50509,1.495.25792,2.27711.30743a2.91242,2.91242,0,0,1,2.62978,2.83983c-.01108.81805-.30863,1.82167.33839,2.32234.37528.29039.90808.24392,1.34773.42241,1.13946.4626,1.1439,2.04883.97555,3.267s-.08506,2.82525,1.08613,3.20033c.82465.2641,1.66742-.29891,2.52418-.42448,1.29251-.18944,2.48848.619,3.63908,1.23756s2.67915,1.03581,3.67643.19207c.928-.78513.86846-2.2215.61327-3.41a18.78968,18.78968,0,0,0-1.78747-4.88693,3.102,3.102,0,0,1-.51817-1.52085,2.75375,2.75375,0,0,1,1.27792-1.86007c1.40979-1.11453,3.03151-2.23658,3.4879-3.97479.335-1.27571-.04182-2.62112-.01273-3.93975.03541-1.60454.6734-3.20218.3742-4.779-.54233-2.85815-3.72326-4.23367-5.77661-6.29447-2.82154-2.83179-3.7376-7.36107-7.06749-9.57284-2.6639-1.76941-6.14831-1.55819-9.18183-2.57056-3.33241-1.11211-6.01486-3.6671-9.302-4.90659a12.96261,12.96261,0,0,0-11.01889.96648,11.02841,11.02841,0,0,1-3.23948,1.65513,11.64687,11.64687,0,0,1-2.94852-.0342,11.3814,11.3814,0,0,0-5.6235,1.16027,3.14415,3.14415,0,0,0-1.57539,1.38165c-.58852,1.30709.26647,3.35047-1.02358,3.97545-.60147.29139-1.31155.01224-1.97973.02691-1.29933.02853-2.29894,1.15915-2.91719,2.30232a11.03264,11.03264,0,0,1-2.04409,3.28973c-1.58825,1.391-4.47379,1.62087-4.88876,3.69094a20.12443,20.12443,0,0,0,.149,2.62234c-.12,1.8345-2.08321,3.2287-1.98075,5.06426.11819,2.11725,2.80817,3.15168,3.52724,5.14658.54753,1.519-.173,3.1614-.66878,4.698s-.6453,3.50622.63511,4.4899c.50206.38571,1.14756.54384,1.65956.91623,1.32492.96364,1.30819,2.90835,1.16106,4.54a2.13535,2.13535,0,0,0,.48137,1.944,1.79886,1.79886,0,0,0,1.47242.17681,6.00977,6.00977,0,0,0,3.8037-2.86237c.42668-.70547.51243-1.32725,1.28754-1.70157.52595-.254,1.16463-.02729,1.7-.35691C279.74623,287.70916,278.86947,283.2356,281.99544,281.91075Z" transform="translate(-104.43006 -64.91113)" fill="#2f2e41"/><path d="M213.87686,368.66083l-3.6547,3.65471S188.294,438.10018,195.60335,452.719s21.92822,51.16584,26.80115,49.9476,21.92822-12.18234,21.92822-13.40057-20.71-35.32879-20.71-35.32879-2.43647-7.30941-1.21824-8.52764,1.21824,0,0-2.43647-1.21823,0,1.21824-2.43647,2.43647-2.43647,2.43647-3.6547,7.3094-31.67409,7.3094-31.67409Z" transform="translate(-104.43006 -64.91113)" fill="#d0cde1"/><polygon points="128.329 446.892 155.131 438.365 158.785 446.892 129.548 452.983 128.329 446.892" fill="#2f2e41"/><polygon points="128.329 446.892 155.131 438.365 158.785 446.892 129.548 452.983 128.329 446.892" opacity="0.1"/><polygon points="164.876 262.939 185.586 279.994 188.023 276.339 164.876 262.939" opacity="0.1"/><polygon points="206.296 267.812 191.678 276.339 192.896 279.994 206.296 267.812" opacity="0.1"/></svg> 
              </div>
            </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Initial Contact
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Discovery Session
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Contracting
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Fast Prototyping
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Design Phase
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Develop & Launch
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
