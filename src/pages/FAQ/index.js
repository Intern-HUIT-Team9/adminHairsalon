import React from "react";
import faq_img from "../../assets/images/faq.jpg";
import styles from "./Faq.module.scss"

function FAQ() {
    return ( 
        <>
            <img className={styles.img_faq} src={faq_img} alt="" />
            <h1 className={styles.title_text}>FAQ</h1>
            <span className={styles.text_faq}>(Frequently Asked Questions)</span>
            <div className={styles.faq_container}>    
            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 text-blue-600 border-blue-500">
              <h2 id="accordion-color-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">    
                  <span className="flex items-center text-lg font-bold">
                  <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg> 
                    Salon có chỗ đậu xe gần không?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                <div class="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi cung cấp chỗ đậu xe thuận tiện cho khách hàng gần salon. Hãy liên hệ để biết thêm chi tiết về bãi đậu xe.</p>
                </div>
              </div>
              <h2 id="accordion-color-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="true" aria-controls="accordion-color-body-2">    
                  <span className="flex items-center text-lg font-bold">
                  <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg> 
                    Salon có những dịch vụ chăm sóc tóc nào?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                <div class="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi cung cấp chỗ đậu xe thuận tiện cho khách hàng gần salon. Hãy liên hệ để biết thêm chi tiết về bãi đậu xe.</p>
                </div>
              </div>
              <h2 id="accordion-color-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="true" aria-controls="accordion-color-body-3">    
                  <span className="flex items-center text-lg font-bold">
                  <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg> 
                  Salon có những mã giảm giá hay quà tặng vào dịp lễ không?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                <div class="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi cung cấp chỗ đậu xe thuận tiện cho khách hàng gần salon. Hãy liên hệ để biết thêm chi tiết về bãi đậu xe.</p>
                </div>
              </div>
            </div>
            </div>
        </>
        
     );
}

export default FAQ;