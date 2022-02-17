import React from 'react';
import './Hero.css';

//images
import desktopBg from '../design/bgintrodesktop.svg';
import phones from '../design/phones.png';

export default function Hero() {
  return (
    <section class="hero">
        
    <div class="hero_wrapper">
        <div class="left">
            <div class="left_wrapper">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.</p>
                <button type="button" class="gradient_btn">Request Invite</button>
            </div>
        </div>
        <div class="right">
            <img src={phones} />
        </div>
    </div>
</section>
  );
}
