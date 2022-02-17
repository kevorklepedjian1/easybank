import React from 'react';
import './Reasons.css';

//images
import Banking from '../design/icon-online.svg';
import Budgeting from '../design/icon-budgeting.svg';
import Onboarding from '../design/icon-onboarding.svg';
import API from '../design/icon-api.svg';

export default function Reasons() {
  return (
    <section class="easybank">
        <div class="easybank_wrapper">
            <div class="easybank_text">
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
            </div>
            <div class="easybank_options">
                <div class="option">
                    <img src={Banking} alt="hand with cash"/>
                    <h2>Online Banking</h2>
                    <p>Our modern web and mobile applications allow you to keep track of your finances
                        wherever you are in the world.</p>
                </div>
                <div class="option">
                    <img src={Budgeting} alt="phone with money symbol"/>
                    <h2>Simple Budgeting</h2>
                    <p>See exactly where your money goes each month. Receive notifications when you’re
                        close to hitting your limits.</p>
                </div>
                <div class="option">
                    <img src={Onboarding} alt="settings icon"/>
                    <h2>Fast Onboarding</h2>
                    <p>We don’t do branches. Open your account in minutes online and start taking control
                        of your finances right away.
                    </p>
                </div>
                <div class="option">
                    <img src={API} alt="design for API"/>
                    <h2>Open API</h2>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking
                        your money has never been easier.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
