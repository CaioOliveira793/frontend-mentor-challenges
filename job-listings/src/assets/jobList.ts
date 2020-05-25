import PhotosnapLogo from './images/photosnap.svg';
import ManageLogo from './images/manage.svg';
import AccountLogo from './images/account.svg';
import MyHomeLogo from './images/myhome.svg';
import LoopStudiosLogo from './images/loop-studios.svg';
import FaceItLogo from './images/faceit.svg';
import ShortlyLogo from './images/shortly.svg';
import InsureLogo from './images/insure.svg';
import EyecamCoLogo from './images/eyecam-co.svg';
import TheAirFilterLogo from './images/the-air-filter-company.svg';

interface JobData {
	id: number,
	company: string,
	logo: string,
	new: boolean,
	featured: boolean,
	position: string,
	role: string,
	level: string,
	postedAt: string,
	contract: string,
	location: string,
	languages: string[],
	tools: string[]
}

const jobList: ReadonlyArray<JobData> = [
	{
    id: 1,
    company: "Photosnap",
    logo: PhotosnapLogo,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    company: "Manage",
    logo: ManageLogo,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: AccountLogo,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: MyHomeLogo,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: LoopStudiosLogo,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: FaceItLogo,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: ShortlyLogo,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: InsureLogo,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: EyecamCoLogo,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: TheAirFilterLogo,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];

export default jobList;
