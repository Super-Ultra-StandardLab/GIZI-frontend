"use client";

import { getPost } from "@/api";
import useModal from "@/hooks/useModal";
import PostType from "@/type/postType.interface";
import { useEffect, useState } from "react";
import Post from "../(modal)/Post";

const Activity = () => {
  const [postList, setPostList] = useState([
    {
      boardId: 0,
      type: "",
      thumbnail: "",
      title: "",
      detail: "",
      createdAt: "",
    },
  ]);
  const { openModal } = useModal();

  useEffect(() => {
    handlePostList();
  }, []);

  const onClickOpenPost = (post: PostType) => {
    openModal({
      component: <Post post={post} />,
    });
  };

  const handlePostList = async () => {
    const result = await getPost();
    if (result.success === false) {
      alert("게시물 조회에 실패하였습니다.");
      return -1;
    }
    setPostList(result);
  };

  return (
    <div className="w-screen flex flex-col gap-20">
      <div className="w-[100%] h-[40vw] flex justify-center bg-[#d1edff]">
        <div className="w-[70%] h-[80%] flex justify-between my-auto">
          <div className="text-6xl leading-normal font-bold my-auto">
            알로이시오기지1968은
            <br />‘
            <span className="underline decoration-[#FFF27F] decoration-[1.8rem] underline-offset-[-1.4rem]">
              쓰는 이들
            </span>
            을 통해&nbsp;
            <span className="underline decoration-[#B8F1B7] decoration-[1.8rem] underline-offset-[-1.4rem]">
              예측하지 않은 일
            </span>
            이
            <br />
            일어나기를 바랍니다’
          </div>
        </div>
      </div>
      <div className="h-auto w-[100%] flex flex-col items-center justify-center gap-20">
        <div className="my-auto text-2xl px-4 border-x-2 border-x-black">
          기지 활동
        </div>
        <div className="w-[70%]">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {postList.slice(postList.length - 3).map((item, index) => (
                <div
                  key={item.boardId}
                  className="w-auto bg-white px-8 border-4 border-blue-200 rounded-xl"
                >
                  <p className="font-bold text-lg my-4">{item.title}</p>
                  <p className="h-20 scrollbar-hide text-[#686868] text-sm">
                    {item.detail.length > 80
                      ? item.detail.slice(0, 80) + "..."
                      : item.detail}
                  </p>
                  <div
                    className="w-[100%] flex justify-center p-4 cursor-pointer font-bold hover:text-[#616161]"
                    onClick={() =>
                      onClickOpenPost({
                        boardId: item.boardId,
                        type: item.type,
                        thumbnail: item.thumbnail,
                        title: item.title,
                        detail: item.detail,
                        createdAt: item.createdAt,
                      })
                    }
                  >
                    자세히보기
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[70%] border border-t-[#bbbbbb]">
          <div className="bg-white p-4">
            <div className="grid grid-cols-5 gap-4">
              <a
                href="https://www.instagram.com/p/C8v2oD_S9g4/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="종이비행기국가대표팀 위플레이와 함께 진로캠프를 진행했습니다."
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449223298_1012974936933742_1739328796626077401_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ub62p1VIwYoQ7kNvgGfgTgT&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCFiba0PX-MdcbRGVhy3N4NJYC4Sy5e3NoFQyKd38J09A&oe=668486A4"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8v2UddSe04/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#울산광역시의회"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449450303_3726719387639631_7479248470049292932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=dNfD1RU5LG4Q7kNvgFixYtF&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDcVH4A435V9ADF62ey5NEujmBjIoQiwDmE5enzmKHYiA&oe=66849735"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8qU5pRSliL/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#장평중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449266553_1025894115765230_1427819592819892469_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=AKHwndq98DAQ7kNvgF7bsTY&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDZzcTi6xZnu3AWblBf1OnrVULXtSGcZi1a3gvnGcIYkA&oe=6684645D"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8qUbWlS5R5/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#하단초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449135729_1201073107698613_1348662391232467500_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=UQhMwHa_mMwQ7kNvgHS7hrd&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCJGbVQnDYN_4sSkz3b8zhcbI0HUUomMRJ1x0XewRU_xw&oe=668473AC"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8qUPGiysg0/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#하단초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449067468_1272605030384052_5400614945503877389_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=9B8i-aFhaagQ7kNvgHzHoz2&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCjGsUmag0nqxe0K_MlkBywhe6rfqa9QQ8G5vgLK940cw&oe=668495C1"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8qT-imSjAu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#구덕초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/449132620_821571699648463_718335353202062108_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=fnKnBAP44QAQ7kNvgG5dyvM&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAWfmEmL5lANjYvKH9m8D4oL1zQbUPsn9b2MWQ-czeJPw&oe=6684772C"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8YKWWbyMwP/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산알로이시오초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/448432396_1205249904159720_4238364843332672238_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=8R1TXO5rBwwQ7kNvgGHWRzE&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA3mUj77k8bod2okYZjLX7LJ7_unIpMq3Omyo-cByVdoQ&oe=66848E14"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8TZGl-yn0p/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#울산광역시의회"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/448377898_1167711784367878_3891198488349288043_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Xl9FUmCPoNMQ7kNvgHSFCQz&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCd6Ko_QZc-nr1jiLwxRyRDEACLpPL-ox6SkK98I_Mqsw&oe=668492CD"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8TZCA8yGHZ/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#사하중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/448578160_987673486352321_871742063129969344_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=wD5OQ5wJMoQQ7kNvgEYDy7d&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDnJ6V-peS_Snxl9354xHU80AFHBXRC61hauDfgup8NSg&oe=66847A8D"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C8L9DdCSSI_/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="칠성중학교(경남)"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/446521751_2565640220274813_8733570522079615575_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=DZ-eWnvYYqkQ7kNvgG_00vW&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBh8pkEnQRkiKY3rE0OyVDyx8gB3MLxOXEQA6D6tzHNMg&oe=66848A47"
                  loading="lazy"
                />
              </a>
              {/* <a
                href="https://www.instagram.com/p/C7xi5bJyJmi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#보림초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/447768866_1406178556747453_6921747472526945931_n.jpg?_nc_cat=102&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=CZEqd6WGdlcQ7kNvgHLSPpp&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCC4cXOQJq4RyJXQ2IlfbQxq2cBEpuHp2d4qk-_n3ZKsA&#038;oe=667DE7B6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7vPd0byEnr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산체육중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/447376220_1994367314329069_121751048392508747_n.jpg?_nc_cat=110&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=M5moo-t8SWQQ7kNvgH7y9Wu&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYA76NoamjNPIy8Ne6G5Z4iJuxgnosg2jfEWm_OWIghZaw&#038;oe=667DFF61"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nvCWQSJ3T/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산국제중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/447146593_1438723063426285_9201441604283769936_n.jpg?_nc_cat=102&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=70TXtSPAHGAQ7kNvgEvu4NQ&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCRk8VDzpeWh96AgOqsjpw8RB0NSw2-VgDqax18RLPnsQ&#038;oe=667DE646"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nu9eOSfab/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산개성중학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/447069314_394889776844041_5002688057231990032_n.jpg?_nc_cat=107&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=OicidyFqZxAQ7kNvgES_S2W&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYDBGQF6256DVwfCzw7B2G4bn1wgOvp8K12qgkbxwrNvnA&#038;oe=667DE988"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nuyyJSvEM/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#산양중학교(통영)"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/446592494_416694841192688_6954021348779361926_n.jpg?_nc_cat=108&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=IndJtaNx3UcQ7kNvgHmCxY3&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYBAiD36AIv2q6olGS5lXr11Lfk5hlU2h_FeuEaK3VBE8A&#038;oe=667DF134"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nupkCyQ_h/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#양성초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/447106339_2828527503951584_47782181586514642_n.jpg?_nc_cat=100&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=AMIj9GiJjRIQ7kNvgEbXfrp&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYBZkW6ofZ08fMv6YS6Oh5jdRFDdgdtGn1wTRj3rUaakcA&#038;oe=667DF629"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nugkVSpXH/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#괴정초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/447133321_437073738943922_4453065557219722729_n.jpg?_nc_cat=104&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=LMg5_BqaId8Q7kNvgHdW_d1&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCuo7eW8ghvQznihx7J-ieFN4vA1kt2QHbVbD2kWq9DKg&#038;oe=667DED2E"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7nuaO_Sd27/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#감천초등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/447108627_6923501571086442_6384461976714321189_n.jpg?_nc_cat=109&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=Fci828_zsc4Q7kNvgHfg7wF&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYA1Zo9tSYa_C-vqOEzWHM03_oncjF0bzFM1bxLSFEJC5g&#038;oe=667E0D9D"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7QDn7JStv2/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#수동중학교(경남함양)"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/443732931_418887797702782_5709935469946844188_n.jpg?_nc_cat=108&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=h9xpkf8w4lAQ7kNvgGDmjDZ&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYBtDcD3uer5pAG1DUxWVPSTTKtsJrXDFRc3ri-ZPM3png&#038;oe=667E1432"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7QC3vuyMRs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#다선중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/445151384_1170785577697294_3472210206010140013_n.jpg?_nc_cat=104&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=35lXVSpzFXwQ7kNvgGKiJgY&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYBojwU-YM2LIcvZaGKPf6XMp-mLElV_Q86g2mS-bBZ3Aw&#038;oe=667DF6E9"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7LSddmSGgw/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#자성대노인복지관"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/444805705_904427378106649_7906043271100401769_n.jpg?_nc_cat=105&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=DEeMQKxAkA8Q7kNvgGIkyFz&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYDJyPV9rSpyNscDyg6klUXT84TJu_GDD9jf_nmpSAvwDA&#038;oe=667E0C62"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7Dp0IuSrAY/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#신남초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/441558190_794496235981256_6976862858206212870_n.jpg?_nc_cat=111&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=H6YLaykveaQQ7kNvgGnF6ox&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYBYSPCJ_uWrLDNWFQtguYIArIgJqrIJXCw3m2D7zHUfkQ&#038;oe=667DFDAD"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7BXRlZLeq1/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#송도초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/443860870_1825032361310840_6167098547669506995_n.jpg?_nc_cat=103&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=3zYoQ-_A-nEQ7kNvgESewly&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCgT02BrR9rUEHPhylx1vx4biE80UXzJ01vAY9Y8_10pQ&#038;oe=667E0529"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7BXNjKrBTV/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#광일초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/436267357_998723085024266_6361412293255644483_n.jpg?_nc_cat=107&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=_V5w7ceEEjQQ7kNvgEn4PdH&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCauqlCn0zEiqTqHvZfKpT-UWTrw4pWasJQ7zYQmBDb7g&#038;oe=667DEC23"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C7BXF-ZreUy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#광일초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/436451008_1860105877818705_8002590957260499307_n.jpg?_nc_cat=103&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=AVOX8s8wcTcQ7kNvgHQSEG-&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYAVAun3Tn9up9rnuBPNs6avTEBe8v4uYNX-YtBMwu9SNA&#038;oe=667E15F2"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C6x0Toqr-ay/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산중앙여자중학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/436311013_1116161349500186_2151417283522337519_n.jpg?_nc_cat=110&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=Wrp45bSOJGwQ7kNvgEXQyWO&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYAiRWHQYDjBW_iq69tloWE3L1grifTNGTwamuk4iYZKfw&#038;oe=667DFFB6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C6xB2LQyTpI/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#주례여자중학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/436638639_809306410655624_5270109295193222139_n.jpg?_nc_cat=107&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=XpcuIRFJcckQ7kNvgEHnV0x&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCzAaNMMQQ6j2ftUd1KuNcwnj6wsBvpGfxWBX4i7KElVw&#038;oe=667E0D27"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C6xBoNMyzee/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#사하초등학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/442431649_1171313400726253_8119183827255300397_n.jpg?_nc_cat=106&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=FRAG7l43QmEQ7kNvgEI0Gl7&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYA02KxiSQ5NmKXVbwGtGNv_uDFqoDctCiyp8Q5jJDFrSw&#038;oe=667E1592"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C6r6geXPuN-/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#동명공업고등학교"
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/441731483_837732831710614_6273788622112304657_n.jpg?_nc_cat=109&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=VpBOyTakvyYQ7kNvgGlVIiz&#038;_nc_ht=scontent-lax3-1.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYC7rnYBrWYpi3wlgftjLWuEfEwlqj7FkbkpkF_hYvVbpg&#038;oe=667DE751"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/p/C6fjsCASk8k/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="#부산남중학교"
                  src="https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/441269464_2196008000754619_1280969082047766540_n.jpg?_nc_cat=103&#038;ccb=1-7&#038;_nc_sid=18de74&#038;_nc_ohc=J7qSxO6I9iEQ7kNvgECX8zV&#038;_nc_ht=scontent-lax3-2.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AYCOBxqxgm3Mso3fY5QfbIUnyRUijrv9LtlVXXTh72vVgw&#038;oe=667DE4ED"
                  loading="lazy"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
