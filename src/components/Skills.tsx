import skills from "../data/skills.json";

export const Skills = () => {
	return (
		<div>
			<h2>{skills.length} Skills</h2>
			<ul>
				{skills.map(skill => {
					return (
						<li><b>{skill.name}</b> - {skill.description}</li>
					)
				})}
			</ul>
		</div>
	);
};
