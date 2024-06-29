const Footer = () => {
  return (
    <div className="flex flex-col mt-[20vw] mb-[10vw]">
      <div className="h-20 flex justify-center">
        <div className="my-auto text-2xl px-4 border-x-2 border-x-black">
          PARTNERS
        </div>
      </div>
      <div className="w-[100vw] h-[200px] flex justify-center">
        <div className="w-[80vw] my-auto flex">
          {[
            {
              src: "/assets/partner1.png",
              path: "http://www.sistersofmary.or.kr/",
            },
            {
              src: "/assets/partner2.png",
              path: "https://www.ncfoundation.or.kr/main",
            },
            {
              src: "/assets/partner3.png",
              path: "https://www.pen.go.kr/main/main.do",
            },
            {
              src: "/assets/partner4.png",
              path: "https://www.childfund.or.kr/regularSpon/regular.do?mcode=7&utm_source=google_pc&utm_medium=search_ad&utm_campaign=%EC%B4%88%EB%A1%9D%EC%9A%B0%EC%82%B0_%EB%B8%8C%EB%9E%9C%EB%93%9C_pc&utm_content=%EB%B8%8C%EB%9E%9C%EB%93%9C_%EC%9E%90%EC%82%AC%EB%AA%85&utm_term=%EC%B4%88%EB%A1%9D%EC%9A%B0%EC%82%B0%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%9E%AC%EB%8B%A8&gad_source=1&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-U84IA3UDvc9hPpOhp_c97gO7tKhapNZoe1w2ecfkZpKo2tkrkAFPxoCS98QAvD_BwE",
            },
            {
              src: "/assets/partner5.png",
              path: "https://woo-projects.com/",
            },
            {
              src: "/assets/partner6.png",
              path: "http://xn--w-op1fx0uplr.com/main/main.aspx",
            },
            {
              src: "/assets/partner7.png",
              path: "https://www.doosan.com/kr",
            },
          ].map((item) => (
            <a
              target="_blank"
              href={item.path}
              className="mx-auto"
              key={item.path}
            >
              <img src={item.src} alt={item.path} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
