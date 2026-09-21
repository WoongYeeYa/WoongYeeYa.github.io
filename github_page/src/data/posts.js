import { n8nStudy1 } from './n8nStudy1'
import { n8nStudy2 } from './n8nStudy2'
import { n8nStudy3 } from './n8nStudy3'
import { n8nStudy4 } from './n8nStudy4'
import { n8nStudy5 } from './n8nStudy5'
import { discordGeminiBot } from './discordGeminiBot'
import { templateTransferTool } from './templateTransferTool'
import { openWebuiStudy, openWebuiStudy2 } from './openWebuiStudy'
import { javaStudies } from './javaStudies'
import { aiGlossary } from './aiGlossary'
import { eclipseShortcuts } from './eclipseShortcuts'

// 정적 게시글: thumbnail과 sections의 여섯 항목을 수정해 글을 관리합니다.
export const postCategories = ['AI', '코딩','개발 도구', '웹 개발', '기타']

export const posts = [
    n8nStudy5,
  n8nStudy4,
  n8nStudy3,
  n8nStudy2,
  n8nStudy1,
  openWebuiStudy2,
  openWebuiStudy,
  discordGeminiBot,
  aiGlossary,
  templateTransferTool,
  eclipseShortcuts,
    ...javaStudies
]
