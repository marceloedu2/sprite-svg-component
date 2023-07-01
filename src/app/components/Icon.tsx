export const iconNames = [
  'brain',
  'activity',
  'drop',
  'face-child',
  'face-doctor',
  'face-happy',
  'face-neutral',
  'face-sad',
  'hand-heart',
  'hand-shake',
  'hospital',
  'loyalty-heart',
  'medical-diet-food',
  'medical-microscope',
  'medical-stethoscope',
  'pill',
  'pill-off',
  'puzzle',
  'woman',
  'workout-barbell',
  'workout-bicep',
  'workout-energy-supplement',
] as const;

export type IconsNamesProps = (typeof iconNames)[number];

interface IconProps {
  name: IconsNamesProps;
  className: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg className={`fill-current ${className}`}>
      <use href={`/assets/svg-sprite.svg#${name}`} />
    </svg>
  );
}
