import { useState } from "react";
import _skills from "../data/skills.json";

export const Skills = () => {
	const [skills, setSkills] = useState(_skills);

	const handleDelete = (skill: any) => {
		const _skills = skills.filter(m => m.idCode !== skill.idCode);
		setSkills(_skills);
	}

	return (
		<div>
			<h2>{skills.length} Skills, {270 - skills.length} were deleted</h2>
			<ul>
				{skills.map(skill => {
					return (
						<li><b>{skill.name}</b> - {skill.description} <button onClick={() => handleDelete(skill)}>Delete</button></li>
					)
				})}
			</ul>
		</div>
	);
};
