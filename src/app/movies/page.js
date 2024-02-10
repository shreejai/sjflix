import Link from 'next/link';

const page = async () => {

  const url = process.env.RAPID_API_URL;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  console.log(main_data);

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