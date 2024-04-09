/// <reference types="vite/client" />

export type HardSkillsType = {
	hardSkills: SkillType[];
};

export type SkillType = {
	name: string;
	icon: string;
	link: string;
};

export type ProjectType = {
	name: string;
	description: string;
	technologies: string[];
	image: string;
	link: string;
	source: string;
};
