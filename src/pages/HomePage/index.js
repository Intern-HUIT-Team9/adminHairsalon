import React from "react";
import styles from "./HomePage.module.scss";
import hair_style1 from "../../assets/images/hair/layer-xoan-chu-c.webp";
import hair_style2 from "../../assets/images/hair/layer_ngan.jpeg";
import hair_style3 from "../../assets/images/hair/toc-uon-gon-song-17.jpg";
import hair_style4 from "../../assets/images/hair/duoithang.webp";
import hair_style5 from "../../assets/images/hair/nhuom_xanh_reu_xam_khoi.png";
import hair_style6 from "../../assets/images/hair/toc_xoan.jpg";
import hair_artist from "../../assets/images/hair_artist/hair_artist.png"
import bg1 from "../../assets/images/bg_img1.png"

function HomePage() {
  return (
    <>
      {/* background  */}
      <div className="relative w-full" data-carousel="slide">
        <div className="relative h-[500px] overflow-hidden rounded-lg">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={bg1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://inhat.vn/wp-content/uploads/2022/08/salon-toc-lao-cai-6-min.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://nguyenvannay.com/wp-content/uploads/2023/11/image1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://posapp.vn/wp-content/uploads/2021/01/thiet-ke-tiem-toc-21-1024x682.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"
                  >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
      {/* album  */}

      <div className="flex justify-center">
        <h2 className={`text-center font-bold ${styles.title_homepage}`}>ALBUM ẢNH</h2> 
      </div>

      {/* action button */}
      <div className="flex justify-center my-4 space-x-4">
        <button className="bg-gradient-to-r from-[#EF3B36] via-[#F27976] to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976]">
          All
        </button>
        <button className="bg-white hover:bg-gradient-to-r hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Layer
        </button>
        <button className="bg-white hover:bg-gradient-to-r hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Mullet
        </button>
        <button className="bg-white hover:bg-gradient-to-r hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Uốn
        </button>
        <button className="bg-white hover:bg-gradient-to-r hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Duỗi
        </button>
        <button className="bg-white hover:bg-gradient-to-r hover:from-[#EF3B36] hover:via-[#F27976] hover:to-[#F27976] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Nhuộm
        </button>

      </div>
      {/* card style_hair */}
      <div className="flex justify-center align-middle">
        <div className="grid grid-cols-3 gap-4 ">

            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style1}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style2}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style3}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style4}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style5}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src={hair_style6}
                alt="Hair Style"
              />


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>

                <button
                  className="mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                </div>
            </div>

        </div>
        
      </div>
      {/* Info  hair artist */}
      {/* <div className={styles.profile_container}>
        <h2>HAIR ARTIST</h2>
        <div className={styles.content}>
            <div className={styles.image_section}>
                <div className={styles.img_box}>
                    <div className={styles.img_item}>
                        <img src={hair_artist} alt="Profile Image"/>
                    </div>
                </div>
            </div>

            <div className={styles.info_section}>
                <h3>Thông tin</h3>
                <p>
                    Chiến Nguyễn (tên thật Nguyễn Văn Chiến) là nhà tạo mẫu tóc tài năng, được mệnh danh là "Phù thủy
                    biến hóa".<br/>
                    Anh cũng là CEO, Chủ tịch Hội đồng quản trị 1900 Hair Salon
                </p>
                <h3>Nghề nghiệp</h3>
                <p>
                    CEO Chiến Nguyễn khá đa năng khi vừa là người quản lý tài năng, vừa là nhà tạo mẫu tóc tay nghề cao,
                    giàu kinh nghiệm về uốn và tỉ mỉ trong từng đường cắt... Từ màu sắc đến cách tạo kiểu của Chiến
                    Nguyễn đều rất thanh lịch, nhẹ nhàng, đủ để tạo ra sự khác biệt cho mỗi khách hàng.<br/>
                    Với sự sáng tạo không ngừng nghỉ, anh đã tạo ra những kiểu dáng, màu nhuộm lạ mắt, dần đưa xu hướng
                    mẫu tóc cho thị trường tóc Việt Nam
                </p>
            </div>
        </div>
      </div> */}

    {/* <div
      className="relative w-full"
      data-carousel="slide"
      style={{
        margin: '20px 0',
        borderRadius:'200px',
        
      }}
    >
        <div
    className="absolute inset-0 rounded-lg"
    style={{
      filter: 'blur(6px)',
      backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius:'200px'
    }}
  ></div>
      <div className="relative h-[700px] overflow-hidden rounded-lg">
      <div className="flex flex-col items-center justify-center text-center font-bold mb-4">
            <h3 style={{color:'#A51313', textTransform:"uppercase", fontSize:'40px'}}>Reviews</h3><br/>
            <span style={{fontSize:'30px'}}> from customers</span>

            <div className=" duration-700 ease-in-out flex items-center p-10  rounded-lg" data-carousel-item>
              <div className="absolute h-40 inset-x-0 top-32 bg-black bg-opacity-50 text-white p-4 w-1/2"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '10px',
                  margin: '10px 0 20px 0',
                  zIndex: 10
                }}
              >
                <span className="absolute bottom-32" style={{ left: "95%" }}>
                  <i className="fa-solid fa-quote-right" style={{ fontSize: '60px', color: "black" }}></i>
                </span>
                
                <div className="absolute left-0 bottom-20" style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "130px",
                  backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 20
                }}>
                </div>

                <p className="text-lg" style={{
                  fontSize: '24px',
                  position: 'relative',
                  display: 'inline-block',
                  paddingBottom: '5px',
                  borderBottom: '1px solid orange'
                }}>
                  <i>Customer 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{ color: "orange" }}></i>
                </p>
                
                <div style={{
                  textAlign: 'center',
                  marginTop: '10px'
                }}>
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                  ))}
                </div>
                
                <p className="font-light text-justify" style={{ paddingTop: '20px' }}>
                  I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                </p>
              </div>

              <div className="absolute h-40 inset-x-0 bottom-24 bg-black bg-opacity-50 text-white p-4 w-1/2"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius:'10px',
                  margin:'30px 0',
                  zIndex:10
              }}
              >
                <span className="absolute bottom-32"
                  style={{
                    left:"95%"
                  }}
                  >
                    <i className="fa-solid fa-quote-right" style={{fontSize:'60px', color:"black"}}></i>
                  </span>
               <div className="absolute left-0 bottom-20"
                    style={{
                      borderRadius:"50%", 
                      width:"150px", 
                      height:"130px",
                      backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex:20
                    }}
                    >
                  
                </div>
                <p className="text-lg"
                style={{
                  fontSize   : '24px',
                  position      : 'relative',
                  display       : 'inline-block',
                  paddingBottom: '5px',
                  borderBottom : '1px solid orange'
                }}
                > <i>Customers 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{color:"orange"}}></i>
                </p><br/>
                <div style={{
                    textAlign: 'center',
                    marginTop: '10px'
                  }}>
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                    ))}
                  </div>
                <p className="font-light text-justify"
                style={{
                  paddingTop:'20px'
                }}
                >I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                </p>
              </div>
            </div>
            <div className=" duration-700 ease-in-out flex items-center p-10  rounded-lg" data-carousel-item>
              <div className="absolute h-40 inset-x-0 top-32 bg-black bg-opacity-50 text-white p-4 w-1/2"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '10px',
                  margin: '10px 0 20px 0',
                  zIndex: 10
                }}
              >
                <span className="absolute bottom-32" style={{ left: "95%" }}>
                  <i className="fa-solid fa-quote-right" style={{ fontSize: '60px', color: "black" }}></i>
                </span>
                
                <div className="absolute left-0 bottom-20" style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "130px",
                  backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 20
                }}>
                </div>

                <p className="text-lg" style={{
                  fontSize: '24px',
                  position: 'relative',
                  display: 'inline-block',
                  paddingBottom: '5px',
                  borderBottom: '1px solid orange'
                }}>
                  <i>Customer 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{ color: "orange" }}></i>
                </p>
                
                <div style={{
                  textAlign: 'center',
                  marginTop: '10px'
                }}>
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                  ))}
                </div>
                
                <p className="font-light text-justify" style={{ paddingTop: '20px' }}>
                  I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                </p>
              </div>

              <div className="absolute h-40 inset-x-0 bottom-24 bg-black bg-opacity-50 text-white p-4 w-1/2"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius:'10px',
                  margin:'30px 0',
                  zIndex:10
              }}
              >
                <span className="absolute bottom-32"
                  style={{
                    left:"95%"
                  }}
                  >
                    <i className="fa-solid fa-quote-right" style={{fontSize:'60px', color:"black"}}></i>
                  </span>
               <div className="absolute left-0 bottom-20"
                    style={{
                      borderRadius:"50%", 
                      width:"150px", 
                      height:"130px",
                      backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex:20
                    }}
                    >
                  
                </div>
                <p className="text-lg"
                style={{
                  fontSize   : '24px',
                  position      : 'relative',
                  display       : 'inline-block',
                  paddingBottom: '5px',
                  borderBottom : '1px solid orange'
                }}
                > <i>Customers 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{color:"orange"}}></i>
                </p><br/>
                <div style={{
                    textAlign: 'center',
                    marginTop: '10px'
                  }}>
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                    ))}
                  </div>
                <p className="font-light text-justify"
                style={{
                  paddingTop:'20px'
                }}
                >I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div> */}
    <div className="flex flex-col items-center justify-center m-10">

      {/* Wrapper div nằm giữa */}
      <div className="w-full max-w-6xl mx-auto rounded-lg">

        {/* Thông tin Hair Artist */}
        <div className={styles.profile_container}>
              <h2 className={styles.title_homepage}>HAIR ARTIST</h2>
              <div className={styles.content}>
                  <div className={styles.image_section}>
                      <div className={styles.img_box}>
                          <div className={styles.img_item}>
                              <img src={hair_artist} alt="Profile Image"/>
                          </div>
                      </div>
                  </div>

                  <div className={styles.info_section}>
                      <h3>Thông tin</h3>
                      <p>
                          Chiến Nguyễn (tên thật Nguyễn Văn Chiến) là nhà tạo mẫu tóc tài năng, được mệnh danh là "Phù thủy
                          biến hóa".<br/>
                          Anh cũng là CEO, Chủ tịch Hội đồng quản trị 1900 Hair Salon
                      </p>
                      <h3>Nghề nghiệp</h3>
                      <p>
                          CEO Chiến Nguyễn khá đa năng khi vừa là người quản lý tài năng, vừa là nhà tạo mẫu tóc tay nghề cao,
                          giàu kinh nghiệm về uốn và tỉ mỉ trong từng đường cắt... Từ màu sắc đến cách tạo kiểu của Chiến
                          Nguyễn đều rất thanh lịch, nhẹ nhàng, đủ để tạo ra sự khác biệt cho mỗi khách hàng.<br/>
                          Với sự sáng tạo không ngừng nghỉ, anh đã tạo ra những kiểu dáng, màu nhuộm lạ mắt, dần đưa xu hướng
                          mẫu tóc cho thị trường tóc Việt Nam
                      </p>
                  </div>
              </div>
            </div>

        {/* Phần review */}
        <div
            className="relative w-full"
            data-carousel="slide"
            style={{
              margin: '20px 0',
              borderRadius:'200px',
              
            }}
          >
              <div
          className="absolute inset-0 rounded-lg"
          style={{
            filter: 'blur(6px)',
            backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius:'200px'
          }}
        ></div>
            <div className="relative h-[700px] overflow-hidden rounded-lg">
            <div className="flex flex-col items-center justify-center text-center font-bold mb-4">
                  <h3 style={{color:'#A51313', textTransform:"uppercase", fontSize:'40px'}}>Reviews</h3><br/>
                  <span style={{fontSize:'30px'}}> from customers</span>

                  <div className=" duration-700 ease-in-out flex items-center p-10  rounded-lg" data-carousel-item>
                    <div className="absolute h-40 inset-x-0 top-32 bg-black bg-opacity-50 text-white p-4 w-1/2"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '10px',
                        margin: '10px 0 20px 0',
                        zIndex: 10
                      }}
                    >
                      <span className="absolute bottom-32" style={{ left: "95%" }}>
                        <i className="fa-solid fa-quote-right" style={{ fontSize: '60px', color: "black" }}></i>
                      </span>
                      
                      <div className="absolute left-0 bottom-20" style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "130px",
                        backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 20
                      }}>
                      </div>

                      <p className="text-lg" style={{
                        fontSize: '24px',
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        borderBottom: '1px solid orange'
                      }}>
                        <i>Customer 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{ color: "orange" }}></i>
                      </p>
                      
                      {/* Star icons */}
                      <div style={{
                        textAlign: 'center',
                        marginTop: '10px'
                      }}>
                        {[...Array(5)].map((_, index) => (
                          <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                        ))}
                      </div>
                      
                      <p className="font-light text-justify" style={{ paddingTop: '20px' }}>
                        I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                      </p>
                    </div>

                    <div className="absolute h-40 inset-x-0 bottom-24 bg-black bg-opacity-50 text-white p-4 w-1/2"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius:'10px',
                        margin:'30px 0',
                        zIndex:10,
                    }}
                    >
                      <span className="absolute bottom-32"
                        style={{
                          left:"95%"
                        }}
                        >
                          <i className="fa-solid fa-quote-right" style={{fontSize:'60px', color:"black"}}></i>
                        </span>
                    <div className="absolute left-0 bottom-20"
                          style={{
                            borderRadius:"50%", 
                            width:"150px", 
                            height:"130px",
                            backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex:20
                          }}
                          >
                        
                      </div>
                      <p className="text-lg"
                      style={{
                        fontSize   : '24px',
                        position      : 'relative',
                        display       : 'inline-block',
                        paddingBottom: '5px',
                        borderBottom : '1px solid orange'
                      }}
                      > <i>Customers 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{color:"orange"}}></i>
                      </p><br/>
                      <div style={{
                          textAlign: 'center',
                          marginTop: '10px'
                        }}>
                          {[...Array(5)].map((_, index) => (
                            <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                          ))}
                        </div>
                      <p className="font-light text-justify"
                      style={{
                        paddingTop:'20px'
                      }}
                      >I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                      </p>
                    </div>
                  </div>
                  <div className=" duration-700 ease-in-out flex items-center p-10  rounded-lg" data-carousel-item>
                    <div className="absolute h-40 inset-x-0 top-32 bg-black bg-opacity-50 text-white p-4 w-1/2"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '10px',
                        margin: '10px 0 20px 0',
                        zIndex: 10
                      }}
                    >
                      <span className="absolute bottom-32" style={{ left: "95%" }}>
                        <i className="fa-solid fa-quote-right" style={{ fontSize: '60px', color: "black" }}></i>
                      </span>
                      
                      <div className="absolute left-0 bottom-20" style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "130px",
                        backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 20
                      }}>
                      </div>

                      <p className="text-lg" style={{
                        fontSize: '24px',
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        borderBottom: '1px solid orange'
                      }}>
                        <i>Customer 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{ color: "orange" }}></i>
                      </p>
                      
                      {/* Star icons */}
                      <div style={{
                        textAlign: 'center',
                        marginTop: '10px'
                      }}>
                        {[...Array(5)].map((_, index) => (
                          <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                        ))}
                      </div>
                      
                      <p className="font-light text-justify" style={{ paddingTop: '20px' }}>
                        I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                      </p>
                    </div>

                    <div className="absolute h-40 inset-x-0 bottom-24 bg-black bg-opacity-50 text-white p-4 w-1/2"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius:'10px',
                        margin:'30px 0',
                        zIndex:10
                    }}
                    >
                      <span className="absolute bottom-32"
                        style={{
                          left:"95%"
                        }}
                        >
                          <i className="fa-solid fa-quote-right" style={{fontSize:'60px', color:"black"}}></i>
                        </span>
                    <div className="absolute left-0 bottom-20"
                          style={{
                            borderRadius:"50%", 
                            width:"150px", 
                            height:"130px",
                            backgroundImage: 'url("https://thehome.vn/wp-content/uploads/2023/11/thietkesalontoc.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex:20
                          }}
                          >
                        
                      </div>
                      <p className="text-lg"
                      style={{
                        fontSize   : '24px',
                        position      : 'relative',
                        display       : 'inline-block',
                        paddingBottom: '5px',
                        borderBottom : '1px solid orange'
                      }}
                      > <i>Customers 2</i>&nbsp;&nbsp;<i className="fa-solid fa-pencil" style={{color:"orange"}}></i>
                      </p><br/>
                      <div style={{
                          textAlign: 'center',
                          marginTop: '10px'
                        }}>
                          {[...Array(5)].map((_, index) => (
                            <i key={index} className="fa-solid fa-star" style={{ color: '#FFD700', margin: '0 3px' }}></i>
                          ))}
                        </div>
                      <p className="font-light text-justify"
                      style={{
                        paddingTop:'20px'
                      }}
                      >I had a wonderful experience with the service provided. The team was professional, efficient, and responsive throughout the entire process.
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            {/* Các nút điều khiển */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* Nút Previous */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            {/* Nút Next */}
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

      </div>

    </div>

    </>

  );
}

export default HomePage;
