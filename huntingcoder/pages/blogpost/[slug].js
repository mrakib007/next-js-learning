import { useRouter } from 'next/router';
import React from 'react'
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div>
      <main className={styles.main}>
      <h1>Title Of the page {slug}</h1>
      <hr />
    <div>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quia voluptatibus id, corrupti, nemo numquam velit animi voluptatem illum veniam eos eligendi corporis! Nostrum quo ad eius quae sapiente nihil commodi dolorem perferendis eligendi sunt? Quo nihil doloribus error laborum quidem,
      possimus in iste praesentium incidunt. Minima suscipit quaerat illo?
    </div>
    </main>
    </div>
  )
}

export default Slug;
