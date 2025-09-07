import Marketing from '../../core/Marketing'
import CustomerStories from '../../core/CustomerStories'
import SecureCard from '../../core/SecureCard'

const CardsFeature = () => {
  return (
    <div className='flex flex-col items-center gap-8 text-center'>
        <Marketing />
        <CustomerStories />
        <SecureCard />
    </div>
  )
}

export default CardsFeature