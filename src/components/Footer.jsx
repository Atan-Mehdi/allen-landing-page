import FooterCard from "./FooterCard";

const about = ["About us", "Blog", "News", "MyExam", "EduBlogs", "Privacy policy", "Public notice", "Careers"]
const helpSupport = [
    "Refund policy",
    "Transfer policy",
    "Terms & Conditions",
    "Contact us"
]

const popularGoals = [
    "NEET UG",
    "JEE Advanced",
    "6th to 10th"
]

const courses = [
    "Ultimate Program",
    "Distance learning",
    "Online Test Series"
]

const centers = [
    "Kota",
    "Bangalore",
    "Indore",
    "Delhi",
    "More centres"
]

const examInfo = [
    "JEE Main",
    "JEE Advanced",
    "NEET UG",
    "Class 10",
    "Class 12",
    "Olympiad Exam",
    "NEET Online Test Series",
    "JEE Online Test Series",
    "JEE Main Online Test Series"
]

export default function Footer() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10%",
            gap: "50px"
        }}>
            <FooterCard name={"About"} contents={about} />
            <FooterCard name={"Help & Support"} contents={helpSupport} />
            <FooterCard name={"Popular goals"} contents={popularGoals} />
            <FooterCard name={"Courses"} contents={courses} />
            <FooterCard name={"Centers"} contents={centers} />
            <FooterCard name={"Exam Information"} contents={examInfo} />
        </div>
    );
}