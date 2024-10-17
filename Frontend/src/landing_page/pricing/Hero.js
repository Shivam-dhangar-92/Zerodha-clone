import React from 'react'

function Hero() {
  return (
    <div className='container'>
          <div className='row text-center border-bottom mb-3  '>
            <h1 className='mt-5'>Pricing</h1>
            <h3 className='mt-3 text-muted fs-5'>Free equity investments and flat 20 traday and F&O tradesl.</h3>
          </div>

          <div className='row mt-5 p-5 text-center'>
            <div className='col-4 p-4'>
            <img src='media/pricing0.svg'/>
            <h1 className='fs-3'>Free equity delivery</h1>
            <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4'>
              <img src='media\intradayTrades.svg'/>
              <h1 className='fs-3'>Intraday and F&O trades</h1>
              <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-4'>
            <img src='media/pricingMF.svg'/>
            <h1 className='fs-3'>Free direct MF</h1>
            <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>      
    </div>
  )
}

export default Hero
