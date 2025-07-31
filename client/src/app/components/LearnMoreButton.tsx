"use client"

export default function LearnMoreButton() {
    return (
        <div className="flex flex-col items-center">
            <p className="text-[#F2F2F2] text-2xl mt-[10px] mb-[10px]">Want to learn more about Swiper?</p>
            <a className="bg-[#58D076] border-[5px] border-solid border-[#58D076] hover:border-[#F2F2F2] text-[#0F0F0F] font-bold text-4xl p-[20px] rounded-4xl mt-[10px]" href="https://swiperjs.com" target="_blank">Click here!</a>
        </div>
    );
}