import { useAnimation, motion, AnimationGeneratorType } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@mui/material';
import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: 'https://internationalsafetysolution.com' },
  { label: 'Blogs', href: 'https://internationalsafetysolution.com/blogs/' },
  { label: 'Courses', href: 'https://internationalsafetysolution.com/courses' },
  { label: 'Study Material', href: 'https://internationalsafetysolution.com/safety-notes' },
  { label: 'Our Services', href: 'https://internationalsafetysolution.com/fire-safety-equipments' },
  { label: 'Schedule', href: 'https://internationalsafetysolution.com/schedule' },
  { label: 'Gallery', href: 'https://internationalsafetysolution.com/gallery' },
];

const HomeLayout = () => {
  const controls = useAnimation();

  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      className="scroll-smooth overflow-x-hidden"
    >
      {/* Responsive NavBar with Hamburger */}
      <Disclosure as="nav" className="bg-resume-851 sticky top-0 z-50 shadow-level-8dp">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      src="/icons/ISS-Icon.png"
                      alt="Logo"
                      width={64}
                      height={64}
                      className="w-16 md:w-20"
                    />
                  </Link>
                </div>

                <div className="flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#4E9D48] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-4 ml-5">
                  <NavBarActions className="flex gap-2">
                    {navLinks.map(({ label, href }) => (
                      <Link key={label} href={href} passHref>
                        <StyledButton variant="text" className="text-[#343434]">
                          {label}
                        </StyledButton>
                      </Link>
                    ))}
                    <Link
                      href="https://internationalsafetysolution.com/online-registration"
                      passHref
                    >
                      <StyledButton className="bg-[#F7A313] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#44A24C] hover:scale-105 transition-all duration-300">
                        Apply Now
                      </StyledButton>
                    </Link>
                    <a href="https://g.co/kgs/QD2c5Gg" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/icons/social-media-icon.png"
                        alt="social"
                        width={40}
                        height={40}
                        className="ml-3 w-8 sm:w-10"
                      />
                    </a>
                  </NavBarActions>
                </div>
              </div>
            </div>

            {/* Mobile Nav Panel */}
            <Disclosure.Panel className="md:hidden px-4 pb-4 pt-2 space-y-2">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} passHref>
                  <StyledButton variant="text" className="block w-full text-left text-[#343434]">
                    {label}
                  </StyledButton>
                </Link>
              ))}
              <Link href="https://internationalsafetysolution.com/online-registration" passHref>
                <StyledButton className="block w-full text-left bg-[#F7A313] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#44A24C] hover:scale-105 transition-all duration-300">
                  Apply Now
                </StyledButton>
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white font-['Roboto_Slab']">
        <div className="px-4 sm:px-10 md:px-20 xl:px-40 2xl:px-60 mb-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-12 sm:pt-20"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transitionEffects}
          >
            <div className="col-span-12 sm:col-span-4 flex justify-center">
              <motion.img
                src="/icons/cv-icon-green.png"
                alt="Resume 3D"
                className="w-6/12 sm:w-9/12 object-contain"
                onMouseEnter={() => controls.start(animationEffectsHoverEnter, transitionEffects)}
                onMouseLeave={() => controls.start(animationEffectsHoverLeave, transitionEffects)}
                animate={controls}
              />
            </div>

            <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
              <h3 className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#4E9D48] font-medium mb-2">
                SIMPLEST WAY TO BUILD A
              </h3>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#343434] mb-6 leading-tight">
                Professional Resume
              </h1>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-8">
                <div className="bg-[#4E9D48] w-1 h-20 sm:h-auto sm:w-1 rounded-lg"></div>
                <p className="text-base sm:text-lg text-[#343434] text-center sm:text-left">
                  “The secret to getting ahead is getting started”
                  <br /> —International Safety Solution
                </p>
              </div>

              <Link href="/builder" passHref>
                <Button
                  variant="contained"
                  className="w-full sm:w-auto bg-[#F7A313] hover:bg-[#44A24C] text-white font-semibold text-base px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  BUILD YOUR RESUME
                </Button>
              </Link>

              <p className="block xl:hidden text-sm text-[#343434] mt-4">
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        className="px-4 sm:px-10 md:px-20 xl:px-40 2xl:px-60 my-10 font-['Roboto_Slab']"
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transitionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeLayout;
