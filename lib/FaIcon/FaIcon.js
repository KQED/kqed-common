import React from 'react'
import PropTypes from 'prop-types'

// Fa SVG Icons import here
// Brands
import Instagram from './Icons/brands/Instagram'
import Facebook from './Icons/brands/Facebook/Facebook'
import FacebookSquare from './Icons/brands/Facebook/FacebookSquare'
import TikTok from './Icons/brands/TikTok'
import Twitter from './Icons/brands/Twitter/Twitter'
import TwitterSquare from './Icons/brands/Twitter/TwitterSquare'
import Youtube from './Icons/brands/Youtube'
import LinkedIn from './Icons/brands/LinkedIn'

// Solid Icons
import AngleUpSolid from './Icons/solid/AngleUpSolid'
import AngleDownSolid from './Icons/solid/AngleDownSolid/AngleDownSolid'
import CircleQuestionSolid from './Icons/solid/CircleQuestionSolid'
import XMarkSolid from './Icons/solid/XMarkSolid'
import CheckSolid from './Icons/solid/CheckSolid'
import LocationDotSolid from './Icons/solid/LocationDotSolid'
import EllipsisSolid from './Icons/solid/EllipsisSolid'
import ArrowLeftSolid from './Icons/solid/ArrowLeftSolid'
import PhoneSolid from './Icons/solid/PhoneSolid'
import HeartSolid from './Icons/solid/HeartSolid'

// Light Icons
import FilterLight from './Icons/light/FilterLight/FilterLight'
import AngleUpLight from './Icons/light/AngleUpLight'
import AngleDownLight from './Icons/light/AngleDownLight'
import XMarkLight from './Icons/light/XMarkLight'
import ThumbsDownLight from './Icons/light/ThumbsDownLight'
import ThumbsUpLight from './Icons/light/ThumbsUpLight'
import LocationDotLight from './Icons/light/LocationDotLight'
import ArrowLeftLight from './Icons/light/ArrowLeftLight'
import ArrowRightLight from './Icons/light/ArrowRightLight'
import ArrowUpLight from './Icons/light/ArrowUpLight'
import ArrowDownLight from './Icons/light/ArrowDownLight'
import GlobeLight from './Icons/light/GlobeLight'
import PlusLight from './Icons/light/PlusLight'
import MinusLight from './Icons/light/MinusLight'
import CheckLight from './Icons/light/CheckLight'
import PhoneLight from './Icons/light/PhoneLight'

// regular
import Bars from './Icons/regular/Bars'

export const icons = {
  angleUpSolid: AngleUpSolid,
  angleDownSolid: AngleDownSolid,
  circleQuestionSolid: CircleQuestionSolid,
  xMarkSolid: XMarkSolid,
  checkSolid: CheckSolid,
  locationDotSolid: LocationDotSolid,
  ellipsisSolid: EllipsisSolid,
  arrowLeftSolid: ArrowLeftSolid,
  phoneSolid: PhoneSolid,
  filterLight: FilterLight,
  angleUpLight: AngleUpLight,
  angleDownLight: AngleDownLight,
  xMarkLight: XMarkLight,
  thumbsUpLight: ThumbsUpLight,
  thumbsDownLight: ThumbsDownLight,
  locationDotLight: LocationDotLight,
  arrowLeftLight: ArrowLeftLight,
  arrowRightLight: ArrowRightLight,
  arrowUpLight: ArrowUpLight,
  arrowDownLight: ArrowDownLight,
  globeLight: GlobeLight,
  facebook: Facebook,
  facebookSquare: FacebookSquare,
  instagram: Instagram,
  linkedIn: LinkedIn,
  tiktok: TikTok,
  twitter: Twitter,
  youtube: Youtube,
  plusLight: PlusLight,
  minusLight: MinusLight,
  checkLight: CheckLight,
  phoneLight: PhoneLight,
  twitterSquare: TwitterSquare,
  heartSolid: HeartSolid,
  bars: Bars
}

export const FaIcon = ({ icon, className = '' }) => {
  if (!icon) return null
  const FaIcon = icons[icon]
  return <FaIcon className={className} />
}

FaIcon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default FaIcon
