import React from 'react'
import '../style/style_clock.css';
// import '@/app/scripts/script_clock.js';

const Clock = () => {
  return (
    <>
     <div className ="style.countdown">
                <div className="time_section" id="hours">
                  <div className="time_group">
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom">       </div>
                        </div>
                      </div>
                    </div>
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Hours</p>
                </div>
          
                <div className="time_section" id="minutes">
                  <div className="time_group">
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom"></div>
                        </div>
                      </div>
                    </div>
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Minutes</p>
                </div>
          
                <div className="time_section" id="seconds">
                  <div className="time_group">
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom"></div>
                        </div>
                      </div>
                    </div>
                    <div className="time_segment">
                      <div className="segment_display">
                        <div className="segment_display__top"></div>
                        <div className="segment_display__bottom"></div>
                        <div className="segment_overlay">
                          <div className="segment_overlay__top"></div>
                          <div className="segment_overlay__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Seconds</p>
                </div>
              </div>
    </>
  )
}

export default Clock