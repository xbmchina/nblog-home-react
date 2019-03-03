import React from 'react';
import PCBlogHeader from './pc_blog_header';
import PCBlogFooter from './pc_blog_footer';
import PCBlogContent from './pc_blog_content';

export default class PCBlogIndex extends React.Component {
	render() {
		return (
			<div>
				<PCBlogHeader></PCBlogHeader>

				<PCBlogContent></PCBlogContent>
				
				<PCBlogFooter></PCBlogFooter>
			</div>
		);
	};
}
