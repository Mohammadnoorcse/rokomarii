import React from 'react'
import "./home.css"
import img1 from "../../../image/10015.png"
import Thirdslide from '../slide/Thirdslide'
function Scondhompage() {
  return (
    <div className='secondhome w100 div-center'>
        <div className="secondhome-content container">
            <div className="secondhome-content-1">
              <img src={img1} alt="" />
              <span>রকমারি ডট কম এর আয়োজনে ৫ম বারের মত চালু হয়েছে রকমারি বইমেলা বেস্টসেলার অ্যাওয়ার্ড-এর লিডারবোর্ড। ০১ এপ্রিল ২০২৩ থেকে শুরু করে ৩১ মার্চ ২০২৪ পর্যন্ত প্রকাশিত বইসমূহ এই আওয়ার্ডের জন্য বিবেচিত হবে৷ লিডারবোর্ডে থাকা বিভিন্ন ক্যাটাগরি ও সাবক্যাটাগরির বেস্টসেলার সর্বমোট ৫০ টি বই, লেখক ও প্রকাশনা সংস্থাকে সম্মাননা প্রদান করা হবে, ইনশাআল্লাহ৷ একটি বই কত বেশী পাঠক কিনলেন এবং সেই বইয়ের বিক্র‍য় মূল্য কত ইত্যাদি প্রাসঙ্গিক বিষয়কে সমন্বয় করে স্বয়ংক্রিয় এলগরিদমের মাধ্যমে লীডারবোর্ডে ওই বই এবং লেখকের অবস্থান নির্ধারিত হয়ে থাকে।</span>
            </div>
            <div className="secondhome-content-2">
             <Thirdslide/>
            </div>

        </div>

    </div>
  )
}

export default Scondhompage