import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.myDiv}>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to learn JavaScript in 2022</h3>
          </Link>
          <p className={styles.blogItemp}>JavaScript is a language used for designing web pages</p>
        </div>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to learn JavaScript in 2022</h3>
          </Link>
          <p className={styles.blogItemp}>JavaScript is a language used for designing web pages</p>
        </div>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to learn JavaScript in 2022</h3>
          </Link>
          <p className={styles.blogItemp}>JavaScript is a language used for designing web pages</p>
        </div>
        </div>
      </main> 
    </div>
  );
};

export default Blog;
