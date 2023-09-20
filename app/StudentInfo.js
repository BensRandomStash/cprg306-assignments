export default function Student() {
    return (
      <div>
        <MyName />
        <MyCourse />
        <MyGit />
      </div>
    );
}

function MyName() {
    return <p>Name: Benjamin Mazerolle</p>;
}

function MyCourse() {
    return <p>Course: Web Development 2 - CPRG306 E</p>;
}

function MyGit() {
    return ( 
    <nav>
        <Link href = "https://github.com/BensRandomStash">Github profile</Link>
    </nav>
    );
}