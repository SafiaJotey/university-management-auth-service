import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface'

const academicSemesterMonth: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const academicSemesterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
]
const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03']
const academicSemesterMappingTitleCode: {
  [key: string]: string
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
const academicSemesterSearchableFields = ['title', 'code', 'year']
const academicSemesterfilterableFields = ['searchTerm', 'title', 'code', 'year']
export const academicSemesterConstant = {
  academicSemesterMonth,
  academicSemesterTitle,
  academicSemesterCode,
  academicSemesterMappingTitleCode,
  academicSemesterSearchableFields,
  academicSemesterfilterableFields,
}
