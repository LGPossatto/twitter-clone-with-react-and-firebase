import PropTypes from "prop-types";

import "./feedHead.style.scss";
import headImg from "../../assets/images/placeholder.png";
import Btn from "../../components/btn/Btn.component";
import IconInfo from "../../components/icon-info/IconInfo.component";
import FollowNumberLink from "../../components/follow-number-link/FollowNumberLink.component";

const FeedHead = ({
  user: { name, email, bio, birthday, location, accountBd },
}) => {
  return (
    <div className="feed-head">
      <div className="head-img">
        <img src={headImg} alt="head" />
      </div>
      <div className="profile">
        <div className="profile__img">
          <img src={headImg} alt="profile" />
        </div>
        <Btn url="#!" text="Follow" no_bg med></Btn>
        <div className="profile__info">
          <h2 className="fs-big">{name}</h2>
          <span className="fs-med fc-secondary">{email}</span>
          <p className="fs-med bio">{bio}</p>
          <div className="more-info flex flex-fw-w">
            <IconInfo icon="fas fa-map-marker-alt" text={location}></IconInfo>
            <IconInfo icon="fas fa-birthday-cake" text={birthday}></IconInfo>
            <IconInfo icon="fas fa-calendar-alt" text={accountBd}></IconInfo>
          </div>
          <div className="follow-numbers">
            <FollowNumberLink
              url="#!"
              number="35"
              text="Following"
            ></FollowNumberLink>
            <FollowNumberLink
              url="#!"
              number="58.5M"
              text="Followers"
            ></FollowNumberLink>
          </div>
        </div>
      </div>
    </div>
  );
};

FeedHead.propTypes = {
  user: PropTypes.object.isRequired,
};

export default FeedHead;
