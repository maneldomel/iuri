import { Play, Volume2, AlertTriangle, CheckCircle, Truck, Shield, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

interface UpsellProps {
  bottles: number;
  pricePerBottle: number;
  checkoutLink?: string;
}

function Upsell({ bottles, pricePerBottle, checkoutLink }: UpsellProps) {
  const total = bottles * pricePerBottle;
  const location = useLocation();
  const isUp1bt = location.pathname === '/up1bt';
  const isUp3bt = location.pathname === '/up3bt';

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 flex flex-col">
      <div className="w-full bg-[#B80000] py-4 px-4 flex items-center justify-center gap-2 md:gap-3 text-white font-bold text-sm md:text-base lg:text-lg sticky top-0 z-50 shadow-lg">
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-pulse" />
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 animate-pulse" />
        <span className="text-center tracking-wide">Wait! Your order has not been completed yet!</span>
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 animate-pulse" />
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-pulse" />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
          Discover how to eliminate toxic testosterone and regain <span className="text-[#B80000]">steel-hard erections</span> in just <span className="text-[#B80000]">3 months</span> (instead of 6)
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 font-light max-w-3xl mx-auto">
          Hello, Michael, here again! First of all, <span className="font-semibold text-gray-800">congratulations on purchasing <span className="text-[#B80000]">Erectos Brutallis!</span></span> Know that you have made one of the most important decisions of your life...
        </p>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-3 mb-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-gray-800">
            <Volume2 className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-bold">
              Read this text until the end, as we have a big surprise for you.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-sm md:max-w-md mx-auto bg-black rounded-[20px] overflow-hidden shadow-2xl aspect-[9/16] mb-4">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <button className="w-16 h-16 md:w-20 md:h-20 bg-[#B80000] rounded-full flex items-center justify-center hover:bg-[#900000] transition-all hover:scale-110 shadow-xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-700 mb-3">
          <Volume2 className="w-5 h-5" />
          <p className="text-sm md:text-base font-medium">
            Your transformation starts today
          </p>
        </div>
        <p className="text-xs md:text-sm text-gray-500 mb-8">
          In just a few weeks, you will notice firmer, longer-lasting erections and renewed sexual drive.
        </p>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-semibold text-gray-800">
            Here's how: instead of taking just one capsule per day, you'll take two
          </p>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            That means you can cut in half the time it would take to become the man you've always been.
          </p>
        </div>

        {isUp1bt ? (
          <>
            <div className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-[30px] p-8 md:p-12 shadow-2xl mb-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD600] text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                BEST VALUE - RESULTS IN 3 MONTHS
              </div>
              <div className="text-white mb-6">
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  {bottles} Bottles of Erectos Brutallis
                </div>
                <div className="text-xl md:text-3xl font-semibold">
                  ${pricePerBottle} per bottle
                </div>
                <div className="text-2xl md:text-4xl font-bold text-[#FFD600] mt-4">
                  Total: ${total}
                </div>
                <div className="text-base md:text-xl text-white/90 mt-2">
                  + 180 extra days of warranty
                </div>
              </div>

              <button
                onClick={() => window.location.href = 'https://pay.erectosbrutallis.com/checkout/201842174:1'}
                className="smartplayer-scroll-event w-full max-w-md mx-auto bg-[#FFD600] text-gray-900 py-4 md:py-6 rounded-full font-bold hover:bg-[#FFC400] transition-all shadow-lg text-xl md:text-2xl"
              >
                YES! I WANT RESULTS IN 3 MONTHS, NOT 6
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-[20px] p-6 md:p-8 shadow-lg">
              <div className="text-white mb-4">
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  No Thanks
                </div>
                <div className="text-base md:text-lg">
                  I prefer to wait 6 months for results
                </div>
              </div>

              <button
                onClick={() => window.location.href = 'https://pay.erectosbrutallis.com/checkout/201842172:1'}
                className="w-full max-w-md mx-auto bg-white/20 text-white py-3 md:py-5 rounded-full font-bold hover:bg-white/30 transition-all shadow-md text-lg md:text-xl"
              >
                NO THANKS
              </button>
            </div>
          </>
        ) : location.pathname === '/up3bt' ? (
          <>
            <div className="mb-4 md:mb-8">
              <div className="relative bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-[30px] p-4 md:p-12 lg:p-16 shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD600] text-gray-900 px-6 py-2 rounded-full text-sm md:text-lg font-bold shadow-lg flex items-center gap-1 md:gap-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-gray-900" />
                  BEST VALUE - RESULTS IN 3 MONTHS
                </div>
                <div className="text-center">
                  <img
                    src="https://i.postimg.cc/FzHG0ng9/erectos-brutallis-13.png"
                    alt="6 Bottles Package"
                    className="w-full h-48 md:h-80 lg:h-96 object-contain mb-3 md:mb-8 mt-2 md:mt-4"
                  />
                  <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-wide">ERECTOS BRUTALLIS</h3>
                  <p className="text-base md:text-2xl text-white/90 font-semibold mb-2 md:mb-4">6 BOTTLES PACKAGE</p>
                  <div className="text-2xl md:text-4xl font-bold text-[#FFD600] mb-3 md:mb-6">
                    $39 PER BOTTLE
                  </div>
                  <button
                    onClick={() => window.location.href = 'https://pay.erectosbrutallis.com/checkout/198160252:1'}
                    className="smartplayer-scroll-event w-full max-w-md mx-auto bg-[#FFD600] text-gray-900 py-3 md:py-6 rounded-full font-bold hover:bg-[#FFC400] transition-all shadow-lg text-base md:text-2xl mb-3 md:mb-6"
                  >
                    YES! I WANT RESULTS IN 3 MONTHS, NOT 6
                  </button>
                  <div className="text-white/90 text-sm md:text-lg mb-3 md:mb-6">
                    Total: <span className="font-bold">$234</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-6 text-white/90 text-xs md:text-base mb-3 md:mb-6">
                    <div className="flex items-center gap-1 md:gap-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                      <span>180-Day Warranty</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <Truck className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Secure</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-2 md:p-4 max-w-lg mx-auto">
                    <img
                      src="https://i.imgur.com/1in1oo5.png"
                      alt="Payment Methods"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-[20px] p-6 md:p-8 shadow-lg">
              <div className="text-white mb-4">
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  No Thanks
                </div>
                <div className="text-base md:text-lg">
                  I prefer to wait 6 months for results
                </div>
              </div>

              <button
                onClick={() => window.location.href = 'https://pay.erectosbrutallis.com/checkout/197882332:1'}
                className="w-full max-w-md mx-auto bg-white/20 text-white py-3 md:py-5 rounded-full font-bold hover:bg-white/30 transition-all shadow-md text-lg md:text-xl"
              >
                NO THANKS
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-[30px] p-8 md:p-12 shadow-2xl mb-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD600] text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                RESULTS IN 3 MONTHS
              </div>
              <div className="text-white mb-6">
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  {bottles} Bottles of Erectos Brutallis
                </div>
                <div className="text-xl md:text-3xl font-semibold">
                  ${pricePerBottle} per bottle
                </div>
                <div className="text-2xl md:text-4xl font-bold text-[#FFD600] mt-4">
                  Total: ${total}
                </div>
                <div className="text-base md:text-xl text-white/90 mt-2">
                  + 60 extra days of warranty
                </div>
              </div>

              <button
                onClick={() => window.location.href = checkoutLink || ''}
                className="w-full max-w-md mx-auto bg-[#FFD600] text-gray-900 py-4 md:py-6 rounded-full font-bold hover:bg-[#FFC400] transition-all shadow-lg text-xl md:text-2xl"
              >
                YES! I WANT RESULTS IN 3 MONTHS, NOT 6
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-[20px] p-6 md:p-8 shadow-lg">
              <div className="text-white mb-4">
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  No Thanks
                </div>
                <div className="text-base md:text-lg">
                  I prefer to wait 6 months for results
                </div>
              </div>

              <button
                onClick={() => window.location.href = checkoutLink || ''}
                className="w-full max-w-md mx-auto bg-white/20 text-white py-3 md:py-5 rounded-full font-bold hover:bg-white/30 transition-all shadow-md text-lg md:text-xl"
              >
                NO THANKS
              </button>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
}

export default Upsell;
