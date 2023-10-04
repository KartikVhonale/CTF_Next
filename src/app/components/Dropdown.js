import React from 'react'
import '@/app/style/style_main.css';

const Dropdown = (props) => {
    const hint_1 = props.hint1;
    const hint_2 = props.hint2;
    const hint_3 = props.hint3;
  return (
    <>
         <div className="downbox">
                <div className="hint_box">
                  <div className="hint">
                    <div className="hint_text">
                        Hint 1
                      </div>
                      <div className="hint_lock">
                        <img className="img_lock" src="/lock_img.png" alt="lock"/>
                      </div>
                  </div>
                  <div className="hint">
                      <div className="hint_text">
                        Hint 2
                      </div>
                      <div className="hint_lock">
                        <img className="img_lock" src="/lock_img.png" alt="lock"/>
                      </div>
                  </div>
                  <div className="answer">
                      <div className="hint_text">
                        Answer
                      </div>
                      <div className="hint_lock">
                       <img className="img_lock" src="/lock_img.png" alt="lock"/>
                      </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Dropdown