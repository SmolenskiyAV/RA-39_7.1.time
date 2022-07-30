/* eslint-disable jsx-a11y/iframe-has-title */

// ### 
import DateTime, { DateTimePretty } from "./Date"
import { nanoid } from 'nanoid';


export default function Video(props) {
    const id = nanoid();
    return (
        <div key={id} className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty wrappedComponent={DateTime} date={props.date} id={id} />
        </div>
    )
}