import { describe, expect, it } from 'vitest'
import { categories, filterProjects, projects } from './portfolio'

describe('portfolio data and project filters', () => {
 it('provides the supported categories', () => { expect(categories).toEqual(['All','AI & ML','Full-stack','Research','Security']) })
 it('returns every project for All', () => { expect(filterProjects(projects,'All')).toHaveLength(projects.length) })
 it('filters to the requested category only', () => { const result=filterProjects(projects,'AI & ML'); expect(result.length).toBeGreaterThan(0); expect(result.every(project=>project.category==='AI & ML')).toBe(true) })
 it('returns an empty list when nothing matches', () => { expect(filterProjects([], 'Security')).toEqual([]) })
 it('contains unique HTTPS GitHub links', () => { const links=projects.map(project=>project.href); expect(new Set(links).size).toBe(links.length); expect(links.every(link=>link.startsWith('https://github.com/'))).toBe(true) })
})
