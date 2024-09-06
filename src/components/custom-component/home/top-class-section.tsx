import CourseCategoryCardList from "./course-category-card-list";
import { CourseCategories } from "@/schema/courseCategories";
import SectionHeader from "./section-header";
const TopClassCoursesContainer = ({
  courseCategory,
}: {
  courseCategory: CourseCategories[];
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 p-3">
      <SectionHeader title={"Top Class Courses"} />
      <h1
        className="text-2xl w-full max-w-xl md:text-3xl font-bold text-center"
        style={{
          background:
            "linear-gradient(90deg, #FFF 0.95%, rgba(217, 217, 217, 0.65) 148.79%)",
          backgroundClip: "text",
          backgroundPosition: "center",
          color: "transparent",
        }}
      >
        Empower Your Skills with Prodev Hub: Transforming Beginners into Experts
      </h1>
      <CourseCategoryCardList courseCategories={courseCategory} />
      <div
        style={{
          background: "linear-gradient(102deg, #465BB8 0%, #663FD6 100%)",
        }}
        className="w-full mt-24 p-12 relative flex items-center justify-center"
      >
        <ul className="grid grid-cols-1 md:grid-cols-3 items-center justify-center relative mx-auto gap-14">
          <div className="flex items-center justify-center max-w-sm gap-3">
            <div className="w-14 h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.3771 4.84328C32.512 4.58789 32.7786 4.42786 33.0692 4.42786C36.5157 4.42786 39.2223 5.93941 41.1553 7.93623C43.0762 9.92045 44.2595 12.4068 44.6917 14.458C44.7529 14.7487 44.6414 15.0486 44.4045 15.2301L42.0223 17.056C43.1365 17.8542 44.5384 18.7175 45.2289 19.1217C45.4709 19.2633 45.6176 19.5229 45.6132 19.8017C45.6087 20.0804 45.4538 20.3353 45.2074 20.4692C41.9981 22.2139 39.158 24.2087 36.628 26.3368C36.5927 26.5168 36.529 26.6739 36.4769 26.7881C36.3516 27.0625 36.1663 27.3509 35.9606 27.6294C35.5458 28.1909 34.9756 28.8091 34.4008 29.3514C33.8309 29.8891 33.216 30.3907 32.7036 30.6951C32.4666 30.836 32.1588 30.9922 31.8465 31.0299C31.7978 31.0358 31.7409 31.0398 31.6785 31.0386C27.0989 35.9205 23.7755 41.0314 21.0963 45.2151C20.9347 45.4675 20.6412 45.6051 20.3421 45.5686C15.4771 44.9783 11.5739 41.7981 9.12928 38.4422C7.90272 36.7583 7.01678 34.9954 6.55116 33.4298C6.31834 32.647 6.18514 31.8944 6.17616 31.2136C6.16756 30.5395 6.28084 29.8844 6.59295 29.3432C6.66053 29.2262 6.7578 29.1286 6.87459 29.0603C11.9418 26.1007 16.4492 22.9321 20.3306 19.5502C20.3342 19.4998 20.3407 19.4548 20.3477 19.417C20.3997 19.1363 20.552 18.8605 20.6892 18.6456C20.9852 18.1819 21.4603 17.6261 21.9753 17.1084C22.4939 16.5872 23.0899 16.0673 23.6477 15.6866C23.9252 15.4971 24.2149 15.3271 24.4963 15.2117C24.6333 15.1555 24.801 15.0983 24.9849 15.0692C28.0044 11.8363 30.4838 8.4289 32.3771 4.84328ZM26.7605 15.438C28.9901 16.2181 32.1114 18.0041 34.3971 21.2253C36.3816 19.4132 38.3134 17.833 40.2728 16.4378L43.0509 14.3085C42.6024 12.6182 41.5906 10.6238 40.0285 9.01022C38.4223 7.35107 36.2581 6.11553 33.5331 5.98898C31.737 9.29921 29.4651 12.4475 26.7605 15.438ZM40.7217 18.0304C38.9094 19.3515 37.107 20.8461 35.2446 22.5591C35.611 23.2067 35.9426 23.902 36.2295 24.647C38.3613 22.9051 40.7049 21.2557 43.2913 19.7625C42.4862 19.2593 41.509 18.6198 40.7217 18.0304ZM21.4523 20.636C18.1275 23.5429 14.3628 26.2855 10.2035 28.869C12.8073 29.2672 15.0606 30.8326 16.6555 32.6323C17.7635 33.8827 18.5981 35.2906 19.0461 36.6C19.1479 36.8976 19.233 37.2004 19.296 37.5025C22.9972 33.1448 26.2347 29.4607 29.2282 26.3193C27.1303 22.9059 23.5839 21.1857 21.4523 20.636ZM29.9861 27.7821C26.7169 31.2389 23.1348 35.3598 18.9423 40.3318C18.8122 40.4861 18.6267 40.5841 18.4249 40.6051C17.5535 40.6962 16.6989 40.4551 15.9245 40.0694C15.1479 39.6826 14.4061 39.1283 13.7364 38.5238C12.3986 37.3165 11.2644 35.8328 10.6215 34.8266C10.4207 34.5125 10.473 34.1012 10.7461 33.8465L11.9173 32.7548C12.2318 32.4617 12.7262 32.477 13.0216 32.7891C13.3171 33.1011 13.3016 33.5917 12.9871 33.8848L12.2978 34.5274C12.9076 35.395 13.7926 36.4788 14.7878 37.3768C15.3926 37.9228 16.0171 38.3807 16.6253 38.6836C17.0517 38.8958 17.4479 39.0213 17.8107 39.0605C17.9058 38.6107 17.8573 37.9484 17.5665 37.0984C17.1931 36.0069 16.4726 34.7738 15.4821 33.6561C13.568 31.4962 10.8074 29.9293 7.82694 30.4112C7.76912 30.6135 7.73436 30.8722 7.73866 31.1939C7.7449 31.6969 7.84569 32.305 8.04959 32.991C8.4578 34.3628 9.25584 35.9692 10.3957 37.5339C12.5974 40.5566 15.9739 43.2946 20.0483 43.9609C22.7085 39.8144 26.0603 34.7266 30.6508 29.8589C30.4869 29.1147 30.261 28.4234 29.9861 27.7821ZM22.1812 19.2281C24.7325 19.9711 28.672 22.0313 30.8824 26.0632C31.4021 27.0112 31.8242 28.0654 32.1086 29.232C32.4537 28.9972 32.8841 28.643 33.3241 28.2279C33.8528 27.729 34.3554 27.1799 34.7003 26.7129C34.8745 26.4771 35.0163 26.2253 35.0791 26.0878C34.6958 24.8638 34.1833 23.7801 33.5888 22.8237C31.1133 18.8417 27.1916 17.0382 25.2161 16.6032C25.1964 16.6077 25.1568 16.6184 25.0933 16.6445C24.9507 16.7029 24.7613 16.8082 24.5333 16.9639C24.08 17.2733 23.5596 17.7228 23.0874 18.1976C22.7201 18.5667 22.4039 18.929 22.1812 19.2281Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col px-3">
              <h5 className="font-semibold text-lg ">
                Reach unprecedented heights
              </h5>
              <p className="w-full font-normal text-[12px] text-[#FCFCFC] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-sm gap-3">
            <div className="w-[50px] h-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M24.2085 11.214C23.8809 11.214 23.6205 10.9536 23.6205 10.626C23.6205 10.2984 23.8809 10.038 24.2085 10.038H26.6445C26.9721 10.038 27.2325 10.2984 27.2325 10.626C27.2325 10.9536 26.9721 11.214 26.6445 11.214H24.2085ZM12.8517 14.4732C15.5985 14.4732 17.8161 16.6992 17.8161 19.4376C17.8161 22.1844 15.5901 24.4104 12.8517 24.4104C10.1049 24.4104 7.87892 22.1844 7.87892 19.4376C7.87892 16.6908 10.1049 14.4732 12.8517 14.4732ZM15.5313 16.758C14.0529 15.2796 11.6505 15.2796 10.1637 16.758C8.68532 18.2364 8.68532 20.6388 10.1637 22.1172C11.6421 23.5956 14.0445 23.5956 15.5313 22.1172C17.0097 20.6388 17.0097 18.2364 15.5313 16.758ZM12.2637 10.9452H13.4397C14.1033 10.9452 14.6493 11.4912 14.6493 12.1548L14.6577 12.6336L15.5481 12.936C15.8253 13.0536 16.1025 13.188 16.3713 13.3392L16.4133 13.3308L16.7325 13.0116C17.2029 12.5412 17.9757 12.5412 18.4461 13.0116L19.2777 13.8432C19.7481 14.3136 19.7481 15.078 19.2777 15.5568L18.9417 15.9012C18.9417 15.9096 18.9417 15.918 18.9501 15.9264C19.1013 16.1868 19.2357 16.464 19.3533 16.7496C19.4709 17.0352 19.5717 17.3208 19.6473 17.6148C19.6809 17.7324 20.4369 17.4384 20.9913 17.9928C21.2097 18.2112 21.3441 18.5136 21.3441 18.8496V20.0172C21.3441 20.6892 20.7981 21.2268 20.1345 21.2268H19.6809L19.6473 21.252C19.4877 21.84 19.2525 22.4196 18.9417 22.9488L18.9501 22.9908C19.3113 23.352 19.6305 23.5956 19.6305 24.1668C19.6305 24.4776 19.5129 24.7884 19.2777 25.0236L18.4461 25.8552C17.9757 26.3256 17.2113 26.3256 16.7325 25.8552L16.3881 25.5192C16.3797 25.5192 16.3713 25.5192 16.3629 25.5276C15.8337 25.8384 15.2625 26.0736 14.6661 26.2332C14.5569 26.2668 14.8425 27.0228 14.2881 27.5772C14.0697 27.7956 13.7673 27.93 13.4313 27.93H12.2553C11.5917 27.93 11.0457 27.384 11.0457 26.7204L11.0373 26.2416L10.1469 25.9308C9.86972 25.8132 9.59252 25.6788 9.32372 25.5276L9.28172 25.536C8.92052 25.8972 8.66852 26.2164 8.10572 26.2164C7.79492 26.2164 7.48412 26.0988 7.24892 25.8636L6.41732 25.032C5.94692 24.5616 5.94692 23.7888 6.41732 23.3184L6.75332 22.974C6.75332 22.9656 6.75332 22.9572 6.74492 22.9488C6.44252 22.4196 6.19892 21.84 6.03932 21.252C6.00572 21.1344 5.24972 21.4284 4.69532 20.874C4.47692 20.6556 4.34252 20.3532 4.34252 20.0172V18.8496C4.34252 18.186 4.88852 17.64 5.55212 17.64H6.04772C6.05612 17.6316 6.05612 17.6316 6.05612 17.6148C6.21572 17.0268 6.45092 16.4472 6.76172 15.918L6.75332 15.876C6.39212 15.5148 6.07292 15.2628 6.07292 14.7C6.07292 14.3892 6.19052 14.0784 6.42572 13.8432L7.25732 13.0116C7.72772 12.5412 8.50052 12.5412 8.97092 13.0116L9.31532 13.3476C9.32372 13.3476 9.33212 13.3476 9.34052 13.3392C9.86972 13.0284 10.4409 12.7932 11.0373 12.6336L11.0625 12.6V12.1464C11.0541 11.4912 11.6001 10.9452 12.2637 10.9452ZM13.4397 12.1212H12.2637L12.2301 12.1548V12.6084C12.2301 13.1544 11.8605 13.6332 11.3313 13.776C10.8357 13.9104 10.3653 14.1036 9.92012 14.3556C9.44972 14.6328 8.84492 14.5572 8.45852 14.1624L8.11412 13.8348C8.10572 13.8348 8.09732 13.8348 8.08892 13.8432L7.25732 14.6748V14.7252L7.57652 15.0528C7.96292 15.4392 8.04692 16.0356 7.76972 16.5144C7.50932 16.9596 7.31612 17.43 7.19012 17.9256C7.04732 18.4548 6.56852 18.8244 6.02252 18.8244L5.54372 18.8328C5.51852 18.8412 5.53532 19.9164 5.53532 20.0256C5.53532 20.1516 6.21572 19.8912 6.76172 20.3112C7.23212 20.6724 7.18172 21.1008 7.42532 21.6552C7.55132 21.9408 7.61852 22.1004 7.77812 22.3692C8.05532 22.848 7.97972 23.4444 7.58492 23.8308L7.25732 24.1752C7.25732 24.1836 7.25732 24.192 7.26572 24.2004L8.09732 25.032H8.14772L8.47532 24.7044C8.85332 24.318 9.45812 24.234 9.93692 24.5112C10.1553 24.6372 10.3821 24.7548 10.6257 24.8472C10.8525 24.9396 11.0961 25.0236 11.3481 25.0908C11.8773 25.2336 12.2469 25.7124 12.2469 26.2584L12.2553 26.7372C12.2637 26.7624 13.3389 26.7456 13.4565 26.7456C13.5825 26.7456 13.3221 26.0652 13.7421 25.5192C13.9017 25.3092 14.1201 25.158 14.3889 25.0824C14.8845 24.948 15.3549 24.7548 15.8001 24.5028C16.2789 24.2256 16.8753 24.3096 17.2617 24.696L17.6061 25.032C17.6145 25.032 17.6229 25.0236 17.6313 25.0236L18.4629 24.192V24.1416L18.1437 23.8224C17.7573 23.436 17.6733 22.8396 17.9505 22.3608C18.2109 21.9156 18.4041 21.4536 18.5301 20.9496C18.6729 20.4204 19.1517 20.0508 19.6977 20.0508H20.1513L20.1849 20.0172V18.8496C20.1849 18.7236 19.5045 18.984 18.9585 18.564C18.7485 18.4044 18.5973 18.1776 18.5217 17.9172C18.4545 17.6652 18.3705 17.43 18.2781 17.1948L17.9421 16.506C17.6649 16.0272 17.7405 15.4308 18.1353 15.0444L18.4629 14.7C18.4713 14.6748 17.7069 13.9272 17.6229 13.8516H17.5725C17.2449 14.1792 17.0349 14.4564 16.5561 14.5236C16.2957 14.5572 16.0353 14.5068 15.7917 14.3724C15.5733 14.2464 15.3465 14.1372 15.1029 14.0364C14.8761 13.944 14.6325 13.86 14.3805 13.7928C13.8513 13.65 13.4817 13.1796 13.4817 12.6252L13.4733 12.1464C13.4565 12.1296 13.4481 12.1212 13.4397 12.1212ZM7.06412 32.9532H7.34132V30.3576C3.75452 28.2324 1.51172 24.3684 1.51172 20.1348C1.51172 13.4064 7.08092 8.01358 13.8093 8.24878V7.92958C13.8093 5.48518 15.8085 3.49438 18.2529 3.49438H36.0441C38.4885 3.49438 40.4793 5.49358 40.4793 7.92958V34.0788C40.4793 36.5232 38.4801 38.514 36.0441 38.514H7.69412C6.16532 38.514 4.91372 37.2624 4.91372 35.7336V35.0952C4.91372 33.9192 5.87972 32.9532 7.06412 32.9532ZM8.51732 32.9532H16.7409V31.4328C16.7409 31.1052 17.0013 30.8448 17.3289 30.8448H24.0405V26.6028C24.0405 26.3424 24.2085 26.1072 24.4773 26.04L26.7453 25.4352L24.1749 21.5544C24.0993 21.4452 24.0657 21.3108 24.0825 21.1764C24.6789 14.9352 19.8237 9.40798 13.4145 9.40798C7.48412 9.41638 2.68772 14.2128 2.68772 20.1348C2.68772 22.1172 3.22532 23.9736 4.16612 25.5696C5.12372 27.1992 6.50972 28.56 8.17292 29.484C8.37452 29.5764 8.51732 29.778 8.51732 30.0216V32.9532ZM17.9169 32.9532H18.3705C20.6049 32.9532 21.9489 35.4984 20.6385 37.338H36.0525C37.8417 37.338 39.3201 35.868 39.3201 34.0788V7.92119C39.3201 6.13199 37.8501 4.66198 36.0525 4.66198H18.2529C16.4637 4.66198 14.9853 6.13199 14.9853 7.92119V8.34119C17.3793 8.66039 19.5465 9.69358 21.2685 11.214C23.9901 13.6164 25.4517 17.0772 25.2837 20.7144C25.2753 20.832 25.2669 20.958 25.2585 21.084L28.1649 25.4772C28.3917 25.8132 28.2069 26.2668 27.8289 26.3676L25.2081 27.0648V31.4412C25.2081 31.7688 24.9477 32.0292 24.6201 32.0292H17.9085V32.9532H17.9169ZM18.3621 34.1292H7.06412C6.53492 34.1292 6.09812 34.566 6.09812 35.0952C6.09812 35.784 6.03092 36.3216 6.56852 36.8592C6.86252 37.1532 7.25732 37.3296 7.70252 37.3296H18.3705C19.7817 37.3296 20.5209 35.616 19.5045 34.5912C19.2105 34.314 18.8073 34.1292 18.3621 34.1292ZM34.0785 26.4936L35.0529 28.2072L36.9849 28.602C37.4217 28.6944 37.6233 29.2404 37.2789 29.5932L35.9685 31.0296L36.1869 32.9952C36.2373 33.4488 35.7669 33.7764 35.3637 33.5916L33.5661 32.7768L31.7685 33.5916C31.3569 33.7764 30.8865 33.4488 30.9453 32.9784L31.1637 31.0212L29.8365 29.568C29.5257 29.232 29.7105 28.686 30.1473 28.602L32.0793 28.2072L33.0537 26.4852C33.2889 26.0904 33.8601 26.0988 34.0785 26.4936ZM34.1625 29.022L33.5661 27.972L32.9697 29.022C32.8857 29.1648 32.7513 29.274 32.5749 29.3076L31.3905 29.5512L32.1801 30.4164C32.3061 30.534 32.3817 30.7188 32.3649 30.912L32.2305 32.1132L33.3309 31.6092C33.4821 31.542 33.6501 31.5336 33.8097 31.6092L34.9101 32.1132L34.7757 30.912C34.7589 30.7524 34.8093 30.5844 34.9269 30.4584L35.7417 29.5596L34.5741 29.3244C34.4061 29.2824 34.2549 29.1816 34.1625 29.022ZM34.0785 17.0352L35.0529 18.7488L36.9849 19.1436C37.4217 19.236 37.6233 19.782 37.2789 20.1348L35.9685 21.5712L36.1869 23.5368C36.2373 23.9904 35.7669 24.318 35.3637 24.1332L33.5661 23.31L31.7685 24.1332C31.3569 24.318 30.8865 23.982 30.9453 23.52L31.1637 21.5628L29.8365 20.1012C29.5257 19.7652 29.7105 19.2192 30.1473 19.1352L32.0793 18.7404L33.0537 17.0184C33.2805 16.632 33.8601 16.6404 34.0785 17.0352ZM34.1625 19.5636L33.5661 18.5136L32.9697 19.5636C32.8857 19.7064 32.7513 19.8156 32.5749 19.8492L31.3905 20.0928L32.1801 20.9496C32.3061 21.0672 32.3817 21.252 32.3649 21.4452L32.2305 22.6464L33.3309 22.1424C33.4821 22.0752 33.6501 22.0668 33.8097 22.1424L34.9101 22.6464L34.7757 21.4452C34.7589 21.2856 34.8093 21.1176 34.9269 20.9832L35.7417 20.0928L34.5741 19.8492C34.4061 19.824 34.2465 19.7232 34.1625 19.5636ZM34.0701 7.58519L35.0445 9.29878L36.9765 9.69358C37.4133 9.77759 37.6149 10.3236 37.2705 10.6848L35.9601 12.1212L36.1785 14.0868C36.2289 14.5404 35.7585 14.868 35.3553 14.6832L33.5577 13.86L31.7601 14.6832C31.3485 14.868 30.8781 14.5404 30.9369 14.07L31.1553 12.1128L29.8197 10.6596C29.5089 10.3236 29.6937 9.77759 30.1305 9.69358L32.0625 9.29878L33.0369 7.57678C33.2805 7.17358 33.8517 7.18199 34.0701 7.58519ZM34.1541 10.1052L33.5577 9.05518L32.9613 10.1052C32.8773 10.248 32.7429 10.3572 32.5665 10.3908L31.3821 10.6344L32.1717 11.4912C32.2977 11.6172 32.3733 11.7936 32.3565 11.9868L32.2221 13.188L33.3225 12.684C33.4737 12.6168 33.6417 12.6084 33.8013 12.684L34.9017 13.188L34.7673 11.9868C34.7505 11.8272 34.8009 11.6592 34.9185 11.5248L35.7333 10.6344L34.5657 10.3908C34.3977 10.3656 34.2465 10.2648 34.1541 10.1052Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col px-3">
              <h5 className="font-semibold text-lg ">
                Enhance your learning skills
              </h5>
              <p className="w-full font-normal text-[12px] text-[#FCFCFC] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-sm gap-3">
            <div className="w-[50px] h-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <g clipPath="url(#clip0_2055_66)">
                  <path
                    d="M32.3397 25.091L29.5518 23.9759C27.4609 23.1395 25.2306 22.7213 22.9306 22.7213H22.8609C20.4912 22.7213 18.1215 23.2092 15.8912 24.0456L13.4518 25.091C12.6851 25.3698 12.1973 26.1365 12.1973 26.9728V31.5031C12.1973 32.4092 12.8245 33.2456 13.7306 33.4546C13.87 33.5243 14.0094 33.5243 14.0791 33.5243C15.3336 33.8728 16.6579 34.1516 17.9124 34.291C21.1882 34.7789 24.5336 34.7789 27.8094 34.291C28.5064 34.2213 29.2033 34.0819 29.9003 33.9425C30.4579 33.8031 31.0851 33.7334 31.6427 33.5243C31.7821 33.4546 31.9912 33.4547 32.1306 33.385C33.0367 33.1759 33.6639 32.3395 33.6639 31.4334V26.9031C33.6639 26.2062 33.1761 25.4395 32.3397 25.091Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.5996 22.4425C27.5996 21.7455 28.0178 21.1183 28.5754 20.9092L30.5269 20.1425C32.2693 19.4455 34.0814 19.097 35.9632 19.097H36.0329C37.7754 19.097 39.5875 19.4455 41.1905 20.0728L43.4208 20.9092C44.0481 21.1183 44.4663 21.7455 44.4663 22.3728V25.9274C44.4663 26.6243 43.9784 27.2516 43.2814 27.4607C40.6329 28.2274 36.8693 28.5061 34.2208 28.4364"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.4005 22.3728C18.3308 21.8152 17.9126 21.3971 17.4247 21.188L15.1944 20.3516C13.5217 19.7243 11.7793 19.3759 10.0368 19.3759H9.96715C8.08533 19.3759 6.27321 19.7243 4.53079 20.4213L2.57927 21.188C1.952 21.3971 1.60352 22.0243 1.60352 22.6516V26.2062C1.60352 26.9031 2.09139 27.5304 2.78836 27.7395C5.43685 28.4365 9.33988 28.7849 11.9187 28.7153"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.9707 29.3425V34.0819"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1699 29.3425V33.8728"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9316 18.6092C25.0102 18.6092 26.6952 16.9241 26.6952 14.8455C26.6952 12.7669 25.0102 11.0819 22.9316 11.0819C20.853 11.0819 19.168 12.7669 19.168 14.8455C19.168 16.9241 20.853 18.6092 22.9316 18.6092Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.0335 16.0303C37.7271 16.0303 39.1001 14.6573 39.1001 12.9636C39.1001 11.27 37.7271 9.89697 36.0335 9.89697C34.3398 9.89697 32.9668 11.27 32.9668 12.9636C32.9668 14.6573 34.3398 16.0303 36.0335 16.0303Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.96706 16.0303C11.6607 16.0303 13.0337 14.6573 13.0337 12.9636C13.0337 11.27 11.6607 9.89697 9.96706 9.89697C8.27338 9.89697 6.90039 11.27 6.90039 12.9636C6.90039 14.6573 8.27338 16.0303 9.96706 16.0303Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.6437 33.6637C31.6437 33.7334 31.7134 33.8031 31.7134 33.8728C30.7377 34.291 30.1801 34.9879 30.1801 35.8243C30.1801 36.6607 30.8074 37.3576 31.7134 37.7758C31.5043 38.8213 31.0861 39.797 30.5286 40.6334C29.5528 40.2849 28.577 40.3546 28.0195 40.9122C27.3922 41.4698 27.3922 42.4455 27.7407 43.4213C26.8346 43.9788 25.9286 44.397 24.8831 44.6061C24.4649 43.7001 23.6983 43.0728 22.9316 43.0728C22.1649 43.0728 21.3286 43.7001 20.9104 44.6061C19.8649 44.397 18.8892 43.9788 18.0528 43.4213C18.4013 42.4455 18.3316 41.5395 17.774 40.9819C17.2164 40.4243 16.2407 40.3546 15.2649 40.7031C14.7074 39.8667 14.2892 38.891 14.0801 37.8455C15.0558 37.4273 15.6134 36.7304 15.6134 35.894C15.6134 35.0576 14.9861 34.3607 14.0801 33.9425C14.0801 33.8728 14.1498 33.7334 14.1498 33.6637"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.8092 34.4303C27.9486 34.8485 28.0183 35.3364 28.0183 35.8242C28.0183 38.6121 25.7183 40.9121 22.8607 40.9121C20.0031 40.9121 17.7031 38.6121 17.7031 35.8242C17.7031 35.3364 17.7728 34.8485 17.9122 34.3606"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.8314 3.83344L32.6193 4.04253L30.7375 6.13344L31.4344 8.85162L28.8556 7.73647L26.4859 9.13041L26.7647 6.41222L24.6738 4.53041L27.392 3.97283L28.4375 1.39404L29.8314 3.83344Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.3548 3.83344L20.1427 4.04253L18.3306 6.13344L18.9579 8.85162L16.3791 7.73647L14.0094 9.13041L14.2882 6.41222L12.1973 4.53041L14.9154 3.97283L15.9609 1.39404L17.3548 3.83344Z"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.4429 22.791L20.8398 28.0183L22.8611 30.388L24.952 28.0183L23.2792 22.791"
                    stroke="white"
                    strokeWidth="1.21212"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2055_66">
                    <rect width="46" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col px-3">
              <h5 className="font-semibold text-lg ">Highly skilled team</h5>
              <p className="w-full font-normal text-[12px] text-[#FCFCFC] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </ul>
        <div className="absolute top-3 right-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="48"
            viewBox="0 0 50 48"
            fill="none"
          >
            <circle
              cx="1.92308"
              cy="1.92308"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="17.3078"
              cy="1.92308"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="32.6926"
              cy="1.92308"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="48.0774"
              cy="1.92308"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="1.92308"
              cy="16.3462"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="17.3078"
              cy="16.3462"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="32.6926"
              cy="16.3462"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="48.0774"
              cy="16.3462"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="1.92308"
              cy="30.7691"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="17.3078"
              cy="30.7691"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="32.6926"
              cy="30.7691"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="48.0774"
              cy="30.7691"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="1.92308"
              cy="45.1924"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="17.3078"
              cy="45.1924"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="32.6926"
              cy="45.1924"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
            <circle
              cx="48.0774"
              cy="45.1924"
              r="1.92308"
              fill="#7B7B7B"
              fillOpacity="0.87"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopClassCoursesContainer;
