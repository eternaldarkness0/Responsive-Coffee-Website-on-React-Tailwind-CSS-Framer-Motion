import React from 'react'
import { motion } from 'framer-motion'
import coffee1 from '../../assets/coffee1.png'
import coffee2 from '../../assets/coffee2.png'

const cardsData = [
    {
        id: 1,
        image: coffee1,
        title: 'Black Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        id: 2,
        image: coffee2,
        title: 'Hot Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        id: 3,
        image: coffee1,
        title: 'Cold Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
];

const cardReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            ease: 'easeInOut',
        },
    },
};

const containerReveal = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

export const Cards = () => {
return (
    <section className='container my-16 space-y-4' id='about'>
        {/* header */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                    delay: 0.2,
                }}
            className='text-3xl font-bold text-lightGray'>
                Fresh and <span className='text-primary'>Tasty</span>
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 10,
                delay: 0.6,
            }}
            className='text-sm opacity-80'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga
            </motion.p>
        </div>

        {/* cards */}
        <motion.div
        variants= {containerReveal}
        initial='hidden'
        whileInView={'visible'}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

            {cardsData.map((card, index) => (
                <motion.div
                variants={cardReveal}
                key={index}
                className='text-center p-4 space-y-6'>
                    <img className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={card.image}/>
                    <div className='space-y-2'>
                        <h1
                        className='text-2xl font-bold text-primary'>
                            {card.title}
                        </h1>
                        <p
                        className='text-darkGray'>
                            {card.subtitle}
                        </p>
                    </div>
                </motion.div>
            ))}

        </motion.div>
    </section>
)
}
