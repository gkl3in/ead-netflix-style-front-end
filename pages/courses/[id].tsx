import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import HeaderAuth from "../../src/components/common/headerAuth";
import { useRouter } from "next/router";
import courseService, { CourseType } from "../../src/services/courseService";
import { useState, useEffect } from "react";

const CoursePage = function () {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter();
  const { id } = router.query;

  const getCourse = async function () {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <p>{course?.name}</p>
      </main>
    </>
  );
};

export default CoursePage;