import Link from 'next/link'

const page = () => {
  return (
    <>
    <h2>Movies Page</h2>
    <Link href={'/movies/asdasd'}>
      go to
    </Link>
    </>
  )
}

export default page