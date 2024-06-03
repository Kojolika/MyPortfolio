import {css} from 'lit';

export const icon = css`
    .icon, .icon-clickable {
        max-width: 96px;
        width: 100%;
        border-radius: 10px;
    }
    .icon-clickable:hover
    {
        cursor: pointer;
    }
    @media screen and (max-width: 420px){
        .icon, .icon-clickable {
            max-width: 64px;
        }
	}
`;
