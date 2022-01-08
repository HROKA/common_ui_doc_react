import './style.css'

import { Hero, Footer, Step, Navbar, BottomLead } from '../../components'

import { logo, rectangle3, rectangle4, rectangle5 } from '../../assets'

const Home = () => {
	const data = {
		hero: {
			title: 'Common UI Toolkit',
			description:
				'NativeBase is an accessible, utility-first component library that helps you build consistent UI across Android, iOS and Web.',
			mainActionText: 'Get started',
			extraActionText: 'Examples',
		},
		step1: {
			title: 'Create an account',
			heading: 'Create/login to an existing account to get started',
			description:
				'An account is created with your email and a desired password',
			img: rectangle3,
			alternate: false,
		},
		step2: {
			title: 'Explore while shopping',
			heading: 'Shop for your favorites meal as e dey hot.',
			description:
				'Shop for your favorite meals or drinks and enjoy while doing it.',
			img: rectangle4,
			alternate: true,
		},
		step3: {
			title: 'Checkout',
			heading: "When you're done, check out and get it delivered.",
			description:
				"When you're done, check out and get it  delivered with ease.",
			img: rectangle5,
			alternate: false,
		},
		bottomLead: {
			actionText: 'Download the demo now.',
			description: 'Available on your favorite store.',
			mainActionText: 'Play store',
			extraActionText: 'App Store',
		},
	}
	return (
		// __________________________TODO: ____________________
		// Add Montserrat font to everything (body)

		<div className='box-border'>
			<div className='flex flex-col'>
				<Navbar logo={logo} />
				<Hero
					title={data.hero.title}
					description={data.hero.description}
					mainActionText={data.hero.mainActionText}
					extraActionText={data.hero.extraActionText}
				/>

				<div
					id='divider'
					className='rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto '
				></div>

				<div
					id='faq'
					className='pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold'
				>
					How the app works{' '}
				</div>

				<Step
					title={data.step1.title}
					heading={data.step1.heading}
					description={data.step1.description}
					img={data.step1.img}
					alternate={data.step1.alternate}
				/>
				<Step
					title={data.step2.title}
					heading={data.step2.heading}
					description={data.step2.description}
					img={data.step2.img}
					alternate={data.step2.alternate}
				/>
				<Step
					title={data.step3.title}
					heading={data.step3.heading}
					description={data.step3.description}
					img={data.step3.img}
					alternate={data.step3.alternate}
				/>

				<BottomLead
					actionText={data.bottomLead.actionText}
					description={data.bottomLead.description}
					mainActionText={data.bottomLead.mainActionText}
					extraActionText={data.bottomLead.extraActionText}
				/>

				<Footer logo={logo} />
			</div>
		</div>
	)
}

export default Home
