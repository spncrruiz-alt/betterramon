// Recurring yearly deadlines under the Local Government Code (RA 7160).
export type Deadline = {
  month: number;
  day: number;
  title: string;
  fil: string;
  ilo: string;
  href: string;
};

export const deadlines: Deadline[] = [
  {
    month: 1,
    day: 20,
    title: 'Business permit renewal and business tax',
    fil: 'Pag-renew ng business permit at buwis sa negosyo',
    ilo: 'Panag-renew ti business permit ken buwis ti negosio',
    href: '/services/business',
  },
  {
    month: 2,
    day: 28,
    title: 'Community tax certificate (cedula)',
    fil: 'Cedula',
    ilo: 'Sedula',
    href: '/services/tax-payments',
  },
  {
    month: 3,
    day: 31,
    title: 'Real property tax, 1st quarter',
    fil: 'Amilyar, unang quarter',
    ilo: 'Amilyar, umuna a quarter',
    href: '/services/tax-payments',
  },
  {
    month: 6,
    day: 30,
    title: 'Real property tax, 2nd quarter',
    fil: 'Amilyar, ikalawang quarter',
    ilo: 'Amilyar, maikadua a quarter',
    href: '/services/tax-payments',
  },
  {
    month: 9,
    day: 30,
    title: 'Real property tax, 3rd quarter',
    fil: 'Amilyar, ikatlong quarter',
    ilo: 'Amilyar, maikatlo a quarter',
    href: '/services/tax-payments',
  },
  {
    month: 12,
    day: 31,
    title: 'Real property tax, 4th quarter',
    fil: 'Amilyar, ikaapat na quarter',
    ilo: 'Amilyar, maikapat a quarter',
    href: '/services/tax-payments',
  },
];

const DAY = 24 * 60 * 60 * 1000;

// Next `count` deadlines on or after `today`, with whole days remaining.
export function upcoming(today: Date, count = 3, list = deadlines) {
  const start = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return list
    .map((d) => {
      let due = Date.UTC(today.getFullYear(), d.month - 1, d.day);
      if (due < start) due = Date.UTC(today.getFullYear() + 1, d.month - 1, d.day);
      return { ...d, due: new Date(due), daysLeft: Math.round((due - start) / DAY) };
    })
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, count);
}
