import { useRouter } from 'next/router'
import React from 'react'


const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>
      <h1>DetailPage</h1>
      <h2>{newsId}</h2>
    </div>
  )
}

export default DetailPage