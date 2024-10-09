import { Component, OnInit } from '@angular/core';
import { DiceHelper } from '../../shared/dice-functions';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-injuries-table',
  templateUrl: './injuries-table.component.html',
  styleUrl: './injuries-table.component.scss'
})
export class InjuriesTableComponent implements OnInit {

  numbers = DiceHelper.generateRangeArrayFromStartToEnd(1, 20)
  staticNumberSelected = 1;
  lowerBound = 0;

  damageTypes = [
    {
      text: 'Acid',
      table: [
        {
          text: 'Blindness',
          description: 'The acid destroys your eyes completely; you gain the blinded condition. Powerful magic is required to restore your eyes (eg. regenerate spell)',
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Partial Blindness',
          description: 'The acid damages your corneas impairing vision; you have disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks that rely on sight and have disadvantage when making ranged attacks. Moderately powerful magic is required to heal the damage to your eyes (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Damaged Limb - Hand',
          description: 'The acid melts through the skin and muscles on your hand making it impossible to use normally; you can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Damaged Limb - Foot',
          description: 'The acid melts through the skin and muscles on your foot making it impossible to use normally; your movement speed on foot is halved and you have disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your foot (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Extensive Acid Burns',
          description: 'The acid has damaged nerve endings across your skin resulting in significant ongoing pain. Whenever you attempt an action in combat you must make a DC 13 Constitution saving throw or lose your action and you can\'t use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Localised Acid Burns',
          description: "The acid has damaged nerve endings across your skin resulting in moderate ongoing pain. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10)
        },
        {
          text: 'Burn Scars',
          description: 'The acid burns across your skin have resulted in significant areas of skin burned away, resulting in disadvantage on Charisma (Persuasion) checks but advantage on Charisma (Intimidation) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Blisters',
          description: 'The acid burns across your skin have resulted in significant areas of blisters, resulting in disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Shallow Acid Burns',
          description: 'The acid has damaged nerve endings across your skin resulting in minor and manageable temporary pain. This results in no significant impairment but looks painful.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Bludgeoning or Force',
      table: [
        {
          text: 'Major Traumatic Brain Injury',
          description: 'The blunt force trauma to your head has resulted in a major traumatic brain injury, resulting in disadvantage on Intelligence, Wisdom, and Charisma checks and saving throws. Powerful magic is required to restore your brain function (eg. regenerate spell)',
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Ruptured Organ',
          description: "The concussive force has ruptured an organ resulting in significant ongoing pain. Whenever you attempt an action in combat, you must make a DC 14 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Moderately powerful magic is required to heal the damage to your organ (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Broken Bones - Radius and Ulna',
          description: 'Radius and Ulna. Damage to your arm bones has resulted in a significant fracture of the radius and ulna, preventing use of the damaged arm. You can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Broken Bones - Femur',
          description: 'Damage to your leg bones has resulted in a significant fracture of the femur, halving your movement speed on foot and giving you disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your leg (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Broken Ribs',
          description: "The concussive force has fractured some ribs resulting in moderate ongoing pain. Whenever you attempt an action in combat, you must succeed on a DC 13 Constitution saving throw or lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your brain (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Minor Traumatic Brain Injury',
          description: "The concussive force received has resulted in a minor traumatic brain injury, resulting in disadvantage on Intelligence, Wisdom, and Charisma checks and Constitution (Concentration) checks. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your brain (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10)
        },
        {
          text: 'Concussion',
          description: 'The blunt force trauma to your head has resulted in a concussion, resulting in disadvantage on Intelligence checks and Concentration (Constitution) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damage to your brain (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Major Bruising',
          description: 'The blunt force trauma to your body has resulted in major bruising across your chest and abdomen. Any additional bludgeoning and force damage received results in an additional 1d4 damage. The injury will self-resolve after one week or healing magic can be used to quickly heal the damage to your brain (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Minor Bruising',
          description: 'The blunt force trauma to your body has resulted in minor bruising on a section of your body. This results in no significant impairment but looks painful.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Cold',
      table: [
        {
          text: 'Extreme Hypothermia',
          description: 'The exposure to intense cold has lowered your body temperature to dangerous levels; permanently interfering with your homeostatic functions. You can take either an Action or Bonus Action on combat (not both), your movement speed is halved and you cannot take the Dash action. Powerful magic is required to restore your homeostatic functions (eg. regenerate spell)',
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Extensive Frostbite',
          description: "The exposure to intense cold has resulted in major damage to your arms and legs. You have disadvantage on Strength, Dexterity, and Constitution ability checks and saving throws. Moderately powerful magic is required to heal the damage to your limbs (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Localised Frostbite - Hand',
          description: 'The cold has damaged skin and muscles on your hand making it impossible to use normally; you can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Localised Frostbite - Foot',
          description: 'The cold has damaged the skin and muscles on your foot making it impossible to use normally; your walking speed is halved and you have disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your foot (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Minor Hypothermia',
          description: "The exposure to intense cold has lowered your body temperature to dangerous levels; interfering with your homeostatic functions. Whenever you attempt an action in combat, you must succeed on a DC 13 Constitution saving throw or lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your foot (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Localised Frostbite - Toe',
          description: "The cold damage has resulted in the loss of a toe. Your movement speed is reduced by 5 feet and when taking the Dash action you must first succeed on a DC 10 Dexterity saving throw or fall prone. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your foot (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Major Cold Burns',
          description: "The cold damage across your skin has resulted in significant areas of skin burned away, resulting in disadvantage on Charisma (Persuasion) checks but advantage on Charisma (Intimidation) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Minor Cold Burns',
          description: 'The cold damage across your skin has resulted in significant areas of blisters, resulting in disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Chills',
          description: 'Exposure to cold has dropped your body temperature rapidly causing uncontrollable shivers. This injury has no further effects and self-resolves after a few hours',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Fire',
      table: [
        {
          text: 'Extreme Hyperthermia',
          description: 'The exposure to intense heat has raised your body temperature to dangerous levels; permanently interfering with your homeostatic functions. You can take either an Action or Bonus Action on combat (not both), your movement speed is halved and you cannot take the Dash action. Powerful magic is required to restore your homeostatic functions (eg. regenerate spell)',
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Hyperthermia',
          description: "The exposure to intense heat has raised your body temperature to dangerous levels; permanently interfering with your homeostatic functions. You have disadvantage on Strength, Dexterity, and Constitution ability checks and saving throws. Any fire damage you take also deals an additional d10 damage. Moderately powerful magic is required to heal the damage to your skin (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Fourth Degree Burns',
          description: 'The exposure to fire has caused significant damage to your skin across a large area of your body. You have disadvantage on Strength, Dexterity, and Constitution ability checks. Any fire damage you take also deals an additional d6 damage. Moderately powerful magic is required to heal the damage to your skin (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Third Degree Burns',
          description: "The heat has damaged nerve endings across your skin resulting in significant ongoing pain. Whenever you attempt an action in combat, you must make a DC 13 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Moderately powerful magic is required to heal the damage to your skin (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Second Degree Burns',
          description: "The damage to your skin has been mostly contained to your lower extremities, however the painful burns restrict movement. Your walking speed is halved and you have disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'First Degree Burns',
          description: "The heat has damaged nerve endings across your skin resulting in moderate ongoing pain. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Burn Scars',
          description: "The burns across your skin have resulted in significant areas of skin burned away, resulting in disadvantage on Charisma (Persuasion) checks but advantage on Charisma (Intimidation) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Blisters',
          description: 'The fire burns across your skin have resulted in significant areas of blisters, resulting in disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Heat Exposure',
          description: 'The fire has burned away hair resulting in loss of sections of hair on your head, face and body. This results in no significant impairment but does make you look ridiculous.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Lightning',
      table: [
        {
          text: 'Intracranial Haemorrhage',
          description: 'The intense energy arcing through your body has ruptured a number of blood vessels inside your brain and brainstem. You have disadvantage on Intelligence, Wisdom, and Charisma ability checks and saving throws. Powerful magic is required to heal the damage (eg. regenerate spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Paralysis',
          description: "The intense energy arcing through your body has disrupted your sympathetic nervous system. Whenever you take an action in combat you must first succeed on a DC 14 Constitution saving throw or be paralysed until the start of your next turn. Moderately powerful magic is required to heal the damage to your nerves (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Nerve Damage - Hand',
          description: 'The lightning has damaged the nerves in your hand making it impossible to use normally; you can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Nerve Damage - Foot',
          description: "The lightning has damaged the nerves in your foot making it impossible to use normally; your walking speed is halved and you have disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your foot (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Corneal Burns',
          description: "The lightning has damaged the corneal tissue of your eyes impairing vision. Your vision is now 30 feet in bright light and 15 feet in dim light, you lose all other types of vision based on sight (eg. darkvision, true sight, etc). In addition the blurry nature of your vision makes it hard to discern friend from foe; when engaged in combat and more than one creature is within melee distance of you (friend or foe) you must first succeed on a DC 12 Perception (Wisdom) check to be able to attack the intended target. If failed the target is chosen randomly by dice roll. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your eyes (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Cardiac Injury - Arrythmia',
          description: "The lightning has damaged the myocardial cells inducing an arrhythmic heartbeat. You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your hearty (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Muscle Weakness',
          description: "The damage to your nerves prevents full activation of skeletal muscles. You have disadvantage on Strength ability checks and saving throws. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Muscle Spasms',
          description: 'The damage to your nerves has resulted in random muscle spasms. You have disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Minor Burns',
          description: 'The lightning damage has burned a line across your body or face, creating an intense looking scar. This results in now significant impairment.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Necrotic',
      table: [
        {
          text: 'Severed Soul',
          description: "The necrotic energy burning through your body has partially severed your soul's connection to it. Your skin takes on a deathly grey pallor and wounds no longer heal naturally at the same rate. You gain half the hit points from healing magic, rolling hit dice during a short rest or when taking a long rest. Powerful magic is required to heal the damage (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Withered Limb - Hand',
          description: "The necrotic energy has drained the life from your hand making it impossible to use normally; you can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Withered Limb - Foot',
          description: 'The necrotic energy has drained the life from your foot making it impossible to use normally. Your walking speed is halved and you have disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your foot (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Major Organ Necrosis',
          description: "The necrotic energy has damaged internal organs resulting in extreme ongoing pain. Whenever you attempt an action in combat, you must make a DC 13 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Moderately powerful magic is required to heal the damage to your organs (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Minor Organ Necrosis',
          description: "The necrotic energy has damaged internal organs resulting in significant ongoing pain. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your organs (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Necrotic Wounds',
          description: "The necrotic damage to your body has caused wounds to fester. Any time you receive damage you take an additional d4 of necrotic damage. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your organs (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Deathly Appearance',
          description: "The necrotic energy still persists inside you, causing your skin to appear withered and your eyes to appear cloudy and corpse like. You have disadvantage on Charisma (Persuasion) checks but advantage on Charisma (Intimidation) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Drained',
          description: 'The necrotic energy has drained you of life and vitality, pushing you into a depressive mood. You gain no bonus to initiative during combat and do not benefit from features such as bardic inspiration, heroism, inspiring leader feat which rely on energising or inspiring you. The injury will self-resolve after one week or healing magic can be used to quickly restore you (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Skin Discoloration',
          description: 'Patches of grey skin resembling that of a corpse appear on your body. This results in no significant impairment but appears unsightly.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Piercing',
      table: [
        {
          text: 'Punctured Eye',
          description: "The attack has pierced your eye and dealt massive damage to the ocular tissue. You have disadvantage on Wisdom (Perception) and Investigation (Intelligence) checks that rely on sight, disadvantage on ranged attack. If this injury leaves you with no functioning eyes you gain the blinded condition. Powerful magic is required to restore your eye (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Punctured Lung',
          description: "The attack has punctured one of your lungs, causing to collapse and deflate. You gain a level of exhaustion which cannot be removed by normal means and if you fail a saving throw against fear or fear effects, you gain another level of exhaustion. Moderately powerful magic is required to heal the damage to your lungs (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Punctured Femoral Artery',
          description: 'The attack has pierced through your leg and punctured a hole through your femoral artery. Your movement speed on foot is halved and you cannot take the Dash action. Moderately powerful magic is required to heal the damage to your leg (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Organ Perforation',
          description: "The attack has perforated an organ. You gain a level of exhaustion which cannot be removed by normal means and you have disadvantage on Constitution checks and saving throws. Moderately powerful magic is required to heal the damage to your organs (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Punctured Stomach',
          description: "The attack has punctured a hole in your stomach, exposing your internal organs to bacteria. You immediately must make a DC 14 Constitution or gain the poisoned condition which remains until you take a long rest. At the end of each long rest you must make a DC 12 Constitution saving throw or gain the poisoned condition which remains until you take a long rest.  This injury will self-resolve after 3 successful Constitution saving throws are made in a row or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Perforated Muscle',
          description: "The attack has perforated muscle tissue, impeding movement and actions. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Festering Wound',
          description: "The attack has created a wound which is now festering. Each time you take poison, acid or necrotic damage you take an additional d6 die of damage. You are disfigured to the extent that the wound can't be easily concealed. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Pierced Muscle',
          description: 'The attack has pierced muscle tissue and the resulting damage now impedes movement. Your movement speed when walking is reduced by 10 feet. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Scar',
          description: 'A small puncture mark scarred on your skin is the only remaining sign of this injury. This results in no significant impairment.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Poison',
      table: [
        {
          text: 'Systemic Organ Failure',
          description: "The poison burning through your system has damaged major organs. You gain the poisoned condition which persists until this injury is cured. In addition at the beginning of each short and long rest you must take 1d10 of poison damage. Powerful magic is required to restore your eyes (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Organ Failure - Liver',
          description: "The poison burning through your system has damaged your liver. Your skin takes on a yellow tone as jaundice sets in and bouts of confusion plague you constantly. When you take the attack action you must first roll a DC 14 Constitution saving throw or gain the stunned condition until the start of your next turn. Anytime you drink alcohol you take 1d8 poison damage. Moderately powerful magic is required to heal the damage to your liver (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Organ Failure - Kidney',
          description: 'The poison burning through your system has damaged your kidneys. You gain a point of exhaustion which cannot be removed by normal means and any poison damage you take deals an additional 1d8 damage. Anytime you drink alcohol you take 1d6 poison damage. Moderately powerful magic is required to heal the damage to your liver (eg. greater restoration spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Retinal Damage',
          description: "The poison burning through your system has damaged the delicate retinal cells of your eyes. Your vision is now 30 feet in bright light and 15 feet in dim light and you lose all other types of vision based on sight (eg. darkvision, true sight, etc). In addition, the blurry nature of your vision makes it hard to discern friend from foe; when engaged in combat and more than one creature is within melee distance of you (friend or foe) you must first succeed on a DC 12 Perception (Wisdom) check to be able to attack the intended target. If failed the target is chosen randomly by dice roll. Moderately powerful magic is required to heal the damage to your liver (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Toxic Shock',
          description: "The presence of poison in your bloodstream has triggered a shock response. You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain a level of exhaustion. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your eyes (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Gastric Shock',
          description: "Your body reacts violently to the poison in your system, making you nauseous and inducing vomiting. You have disadvantage on Constitution checks and saving throws. In addition whenever you consume food or drink (including potions) you must succeed on a DC12 Constitution saving throw, otherwise you violently regurgitate the item and take 1d4 poison damage. The effect will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Intoxicated',
          description: "The poison has damaged small blood vessels around the brain resulting in dizziness and confusion. You have disadvantage on (Acrobatics) Dexterity checks and saving throws. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Gastric Upset',
          description: 'The poison has triggered bouts of nausea and diarrhoea. You have disadvantage on Persuasion (Charisma) and Acrobatics (Dexterity) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Topical Rash',
          description: 'Contact with a poisonous substance has triggered a mild skin reaction. This results in no significant impairment but looks unsightly.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Psychic',
      table: [
        {
          text: 'Catastrophic Cognitive Overload',
          description: "The power of the physic attack has completely overloaded your neurochemical processes resulting in massive damage to brain tissue. You have disadvantage on Intelligence, Wisdom, and Charisma checks and saving throws. In addition roll on the Indefinite Madness table from the Dungeon Masters Guide - this madness cannot be cured until the injury is resolved. Powerful magic is required to restore your brain (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Cognitive Overload',
          description: "The power of the physic attack has completely overloaded your neurochemical processes resulting in damage to brain tissue. Roll on the Indefinite Madness table from the Dungeon Masters Guide - this madness cannot be cured until the injury is resolved. Powerful magic is required to restore your brain (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Weakened Mind',
          description: "The damage caused by the physic assault on your mind has weakened your cognitive abilities. You have disadvantage on Intelligence checks and saving throws. In addition you temporarily lose one tool proficiency and one language (determined randomly by rolling) and physic damage deals an additional 1d8 damage. Moderately powerful magic is required to heal the damage to your mind (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Induced Phobia',
          description: "The physic damage received has been intertwined in your mind with the events that caused it.You develop a debilitating fear of something in the situation from which you gained your injury. For example, if you were damaged by a mind flayer, you might have a fear of octopuses; this is decided by the DM and player together. When you are confronted with your phobia, you have disadvantage on all ability checks and saving throws. Moderately powerful magic is required to heal the damage to your mind (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Induced Madness - Long Term',
          description: "The power of the physic attack has weakened your grip on reality. Roll on the Long-Term Madness table from the Dungeon Masters Guide. This injury is cured when the madness is; requiring moderately powerful magic to resolve (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Migraine',
          description: "The physic damage has triggered a painful migraine resulting in neurological and visual symptoms. You have disadvantage on Concentration (Constitution) checks and the DC for Concentration (Constitution) checks is +2. In addition when taking physic damage you must succeed on a DC 12 Constitution saving throw or be stunned until the end of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your mind (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Induced Madness - Short Term',
          description: "The power of the physic attack has weakened your grip on reality. Roll on the Short-Term Madness table from the Dungeon Masters Guide. This injury is cured when the madness is; requiring moderately powerful magic to resolve (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Hallucinations',
          description: 'The physic attack has caused a sensory overload causing you to occasionally hallucinate. The hallucinations might be a source of fear, strange lights and shapes or something else imaginative; this is decided by the DM and player together. Immediately roll a DC 12 Intelligence check to be able to be able to differentiate the hallucinations from reality, if failed the creature perceives these hallucinations as real and acts accordingly. Repeat the DC Intelligence check at the end of each long rest until this injury is resolved. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Minor Headache',
          description: 'A pounding pain in the back of your skull is a reminder of the psychic damage received. This results in no significant impairment but looks painful.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Radiant',
      table: [
        {
          text: 'Blindness',
          description: "The radiant energy has completely burned out your retinas; you gain the blinded condition. Powerful magic is required to restore your eyes (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Partial Blindness',
          description: "The radiant energy has severely damaged your retina and impaired vision; you have disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks that rely on sight and have disadvantage when making ranged attacks. Moderately powerful magic is required to heal the damage to your eyes (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Fourth Degree Burns',
          description: "The exposure to radiant energy has caused significant damage to your skin across a large area of your body. You have disadvantage on Strength, Dexterity, and Constitution ability checks. Any radiant damage you take also deals an additional d6 damage. Moderately powerful magic is required to heal the damage to your skin (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Third Degree Burns',
          description: "The exposure to radiant energy has damaged nerve endings across your skin resulting in significant ongoing pain. Whenever you attempt an action in combat, you must make a DC 13 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Moderately powerful magic is required to heal the damage to your skin (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Retinal Damage',
          description: "The radiant energy has damaged the retinal tissue of your eyes impairing vision. Your vision is now 30 feet in bright light and 15 feet in dim light, you lose all other types of vision based on sight (eg. darkvision, true sight, etc). In addition the blurry nature of your vision makes it hard to discern friend from foe; when engaged in combat and more than one creature is within melee distance of you (friend or foe) you must first succeed on a DC 12 Perception (Wisdom) check to be able to attack the intended target. If failed the target is chosen randomly by dice roll. Moderately powerful magic is required to heal the damage to your eyes (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Second Degree Burns',
          description: "The radiant energy has damaged nerve endings across your skin resulting in moderate ongoing pain. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Burn Scars',
          description: "The burns across your skin have resulted in significant areas of skin burned away, resulting in disadvantage on Charisma (Persuasion) checks but advantage on Charisma (Intimidation) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Blisters',
          description: 'The radiant energy burns across your skin have resulted in significant areas of blisters, resulting in disadvantage on Dexterity (Acrobatics) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Radiant Exposure',
          description: 'The radiant energy has burned away hair resulting in loss of sections of hair on your head, face and body. This results in no significant impairment but does make you look ridiculous.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Slashing',
      table: [
        {
          text: 'Ruptured Eye',
          description: "The attack has ruptured your eye and dealt massive damage to the ocular tissue. You have disadvantage on Wisdom (Perception) and Investigation (Intelligence) checks that rely on sight, disadvantage on ranged attack. If this injury leaves you with no functioning eyes you gain the blinded condition. Powerful magic is required to restore your eye (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Amputated Limb - Hand',
          description: "The attack has amputated your hand removing it completely. You can no longer hold anything with two hands and you can hold only a single object at a time. Moderately powerful magic is required to heal the damage to your hand (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Amputated Limb - Foot',
          description: "The attack has amputated your foot removing it completely. Your walking speed is halved and you have disadvantage on Dexterity (Acrobatics) checks. Moderately powerful magic is required to heal the damage to your foot (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Severed Tendon',
          description: "The attack has cut through vital tendons in your leg, impeding movement. Your movement speed on foot is reduced by 10 feet. You must make a DC 10 Dexterity saving throw after using the Dash action or fall prone. Moderately powerful magic is required to heal the damage to your organs (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Slashed Abdomen',
          description: "The attack has slashed a gash in your stomach, exposing your internal organs to bacteria. You immediately must make a DC 14 Constitution or gain the poisoned condition which remains until you take a long rest. At the end of each long rest you must make a DC 12 Constitution saving throw or gain the poisoned condition which remains until you take a long rest.  This injury will self-resolve after 3 successful Constitution saving throws are made, four weeks have elapsed or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Slashed Muscle',
          description: "The attack has perforated muscle tissue, impeding movement and actions. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your body (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Disfiguring Wound',
          description: "The attack has left you with an unsightly and disfiguring wound. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. The injury will self-resolve after two weeks or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Lacerations',
          description: 'The attack has left deep cuts across your body which are easily reopened. Slashing, bludgeoning, force and piercing damage deal an additional 1d6 damage. The injury will self-resolve after one week or healing magic can be used to quickly heal the damaged areas (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Scar',
          description: 'A small silvery scar across your skin is the only remaining sign of this injury. This results in no significant impairment.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
    {
      text: 'Thunder',
      table: [
        {
          text: 'Major Traumatic Brain Injury',
          description: "The concussive force has caused in major traumatic brain injury, resulting in disadvantage on Intelligence, Wisdom, and Charisma checks and saving throws. Powerful magic is required to restore your brain function (eg. regenerate spell)",
          range: DiceHelper.generateRangeArrayFromStartToEnd(1, 1)
        },
        {
          text: 'Ruptured Eardrums',
          description: "The concussive force has ruptured your eardrums; you gain the deafened condition. Moderately powerful magic is required to heal the damage to your ears (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(2, 2)
        },
        {
          text: 'Tinnitus',
          description: "The concussive force has damaged your eardrums resulting in a continuous ringing sound. You have disadvantage on any ability check that requires hearing. Moderately powerful magic is required to heal the damage to your ears (eg. greater restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(3, 3)
        },
        {
          text: 'Organ Perforation',
          description: "The concussive force has perforated an organ resulting in significant ongoing pain. You gain a level of exhaustion which cannot be removed by normal means and you have disadvantage on Constitution checks and saving throws. Moderately powerful magic is required to heal the damage to your organs (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(4, 4)
        },
        {
          text: 'Broken Ribs',
          description: "The concussive force has fractured some ribs resulting in moderate ongoing pain. Whenever you attempt an action in combat, you must make a DC 13 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. The injury will self-resolve after four weeks or moderately powerful magic can be used to quickly heal the damage to your brain (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(5, 7)
        },
        {
          text: 'Minor Traumatic Brain Injury',
          description: "The concussive force received has resulted in a minor traumatic brain injury, resulting in disadvantage on Intelligence, Wisdom, and Charisma checks and Constitution (Concentration) checks. The injury will self-resolve after three weeks or moderately powerful magic can be used to quickly heal the damage to your brain (eg. lesser restoration spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(8, 10 )
        },
        {
          text: 'Concussion',
          description: "The trauma to your head has resulted in a concussion, resulting in disadvantage on Intelligence checks and Constitution (Concentration) checks. The injury will self-resolve after one week or healing magic can be used to quickly heal the damage to your brain (eg. cure wounds spell).",
          range: DiceHelper.generateRangeArrayFromStartToEnd(11, 13)
        },
        {
          text: 'Major Bruising',
          description: 'The concussive trauma to your body has resulted in major bruising across your chest and abdomen. Any additional bludgeoning and force damage received results in an additional d4 of damage. The injury will self-resolve after one week or healing magic can be used to quickly heal the damage to your brain (eg. cure wounds spell).',
          range: DiceHelper.generateRangeArrayFromStartToEnd(14, 16)
        },
        {
          text: 'Minor Bruising',
          description: 'The blunt force trauma to your body has resulted in minor bruising on a section of your body. This results in no significant impairment but looks painful.',
          range: DiceHelper.generateRangeArrayFromStartToEnd(17, 20)
        },
      ],
    },
  ]

  damageTypeSelected = this.damageTypes[0]

  diceLog = false;
  result =   {
    damageType: '',
    text: '',
    description: '',
    rollInjury: 0,
    newResult: 0,
  }

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.initSettings();
  }

  damageTypeChanged() {
    setTimeout(() => {
      this.saveSettings();
    }, 100);
  }

  staticNumberChanged() {
    setTimeout(() => {
      this.startSimulation(this.staticNumberSelected)
      this.saveSettings();
    }, 100);
  }

  initSettings() {
    const settingsAsString = this.localStorageService.getItem('random-injuries-settings');
    if (settingsAsString) {
      const settings = JSON.parse(settingsAsString)
      console.log('random-injuries-settings', settings)
      this.diceLog = settings.diceLog;
      this.damageTypeSelected = this.damageTypes.find(x => x.text === settings.damageTypeSelected.text) || this.damageTypes[0]
    }
  }

  saveSettings() {
    const settings = {
      diceLog: this.diceLog,
      damageTypeSelected: this.damageTypeSelected,
    }
    this.localStorageService.setItem('random-injuries-settings', JSON.stringify(settings));
  }

  startSimulation(staticNumber: number | null | undefined) {
    const damageType = this.damageTypes.find( x => x.text === this.damageTypeSelected.text);
    if (damageType) {
      this.result.rollInjury = DiceHelper.rollADice(20);
      if (staticNumber) {
        this.result.rollInjury = staticNumber;
      }
      let finalRoll = this.result.rollInjury
      if (this.lowerBound && (this.result.rollInjury <= this.lowerBound)) {
        finalRoll = this.lowerBound;
      }
      this.result.damageType = damageType.text; 
      const injury = damageType.table.find( x => x.range.includes( finalRoll)); 
      this.result.text = injury?.text || 'error'; 
      this.result.description = injury?.description || 'error'; 
    }
    this.saveSettings();
  }

  openExternalLink(url: string) {
    window.open(url)
  }

}


 
