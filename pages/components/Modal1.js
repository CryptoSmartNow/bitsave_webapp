// create modal
import React, { useState } from 'react';
// import bit from '/styles/bitdash.module.css'

const Modal1 = ({ isOpen, onClose }) => {

    const [savingsName, setSavingsName] = useState('')

  return (
    <div  className={bit.modal_container}>
          <div className={bit.modal_content}>
            <div className={bit.modal_header}>
              <h2>Step 01</h2>
              <div className={bit.modal_vertical_separator}></div>
              <div className={bit.step_circles}>
                <div className={`${bit.circle} ${bit.active}`}>1</div>
                <div className={`${bit.modal_horizontal_separator} ${bit.active}`}></div>
                <div className={bit.circle}>2</div>
                <div className={bit.modal_horizontal_separator}></div>
                <div className={bit.circle}>3</div>
              </div>
            </div>
            <div className={bit.savings_container}>
              <div className={bit.content}>
                <div className={bit.header}>
                  <div className={bit.dot}></div>
                  <h4>Savings Name and Amount</h4>
                </div>
                <input
                    type="text"
                    id="savings-name"
                    placeholder="Name your savings plan"
                    className={bit.textInput}
                    value={savingsName}
                    onChange={(e) => setSavingsName(e.target.value)}
                  /> 
                <div className={bit.input_row}>
                <input
                type="text"
                id="deposit-amount"
                placeholder="$000,000.00"
                // value={depositAmount}
                // onChange={(e) => setDepositAmount(e.target.value)}
              />
                  <div className={bit.currency_dropdown}>
                  <select
                  id="currency"
                  className={bit.currency_select}
                //   value={currency}
                //   onChange={(e) => setCurrency(e.target.value)}
                >
                      <option value="bitcoin">Algo</option>
                      <option value="ethereum">USDT</option>
                      <option value="litecoin">gAlgo</option>
                    </select>
                  </div>


                </div>
              </div>
            </div>
            <div className={bit.button_row}>
              <button className={bit.back_button} onClick={onClose}>Close</button>
              <button className={bit.next_button} id="nextModalButton">Next</button>
            </div>

          </div>
        </div> 
  );
};

export default Modal1;
