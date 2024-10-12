import React from 'react'
import { motion } from 'framer-motion'
import CreditCards from '../../assets/credit-cards.png'
import { FaGoogle, FaInstagram, FaPhone, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

export const Footer = () => {
return (
<footer className='bg-gradient-to-r from-primary to to-primaryDark pt-12 pb-8 text-white'>
    <div className='container mb-5'>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company section */}
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
            }}
            className='space-y-6'>
                <h1 className='text-3xl font-bold uppercase'>
                Coders Cafe
                </h1>
                <p className='text-sm max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
                </p>
                <div>
                    <p className='flex items-center gap-2'>
                    <FaPhone />
                    +1 131 411 4124
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                    <FaMapLocation />
                    Florida, USA
                    </p>
                </div>
            </motion.div>

            {/* footer section */}
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                delay: 0.4,
                duration: 0.6,
            }}
            className='grid grid-cols-2 gap-3'>

                {/* 1 column */}
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>
                    Links
                    </h1>
                    <ul className='space-y-2'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#contact">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* 2 column */}
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>
                    Links
                    </h1>
                    <ul className='space-y-2'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#contact">Privacy Policy</a></li>
                    </ul>
                </div>

            </motion.div>

            {/* social links */}
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                delay: 0.6,
                duration: 0.6,
            }}
            className='space-y-6'>
                <h1 className='text-3xl font-bold'>Follow Us</h1>
                <div className='flex items-center gap-3'>
                    <FaYoutube className='text-3xl hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                </div>
                <div>
                    <h1 className='text-xl mb-2 font-semibold'>Payment Methods
                    </h1>
                    <img src={CreditCards} alt="credit cards"
                    className='w-[80%]'/>
                </div>
            </motion.div>

        </div>

    </div>
</footer>
)
}
