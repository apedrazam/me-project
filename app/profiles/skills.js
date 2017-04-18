import React from 'react';

import Stars from './stars.js';

class SkillList extends React.Component {
	render() {
		var skillItem = this.props.skillData.map(function(skill) {
			return(
				<li className="skill" key={skill.skillName}>
					<div className="skill-name">
						{skill.skillName}
					</div>
					<Stars level={skill.skillLevel} />
				</li>

			)
		});
		return(
			<ul>{skillItem}</ul>
		)
	}
}

class SkillCategoryList extends React.Component {
	render() {
		var skillCategoryHead = this.props.data.skills.map(function(skillCategory) {
			return(
				<li key={skillCategory.categoryName}>
					<h3>
						{skillCategory.categoryName}
					</h3>
					<SkillList skillData={skillCategory.skills} />
				</li>
			)
		});
		return(
			<ul>{skillCategoryHead}</ul>
		)
	}
}

class ProfileSkills extends React.Component {
	render() {
		return(
			<div className="profile-skills">
				<SkillCategoryList data={this.props} />
			</div>
		)
	}
}

export default ProfileSkills;